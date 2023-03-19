from fastapi import FastAPI, WebSocket, HTTPException, status
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import requests
from pathlib import Path
import json
import random
import asyncio
import json
import random
from dotenv import load_dotenv, find_dotenv
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

STOCK_DATA_PATH = 'https://raw.githubusercontent.com/madhavms/react-host-remote/main/finAPI/stockapi/data_source/stock_data.json'
RISK_DATA_PATH = 'https://raw.githubusercontent.com/madhavms/react-host-remote/main/finAPI/stockapi/data_source/risk_data.json'
MENU_DATA_PATH = './data_source/menu_data.json'
APPS_DATA_PATH = './data_source/apps_data.json'

load_dotenv(find_dotenv())

app = FastAPI()

# create SQLite database
engine = create_engine("sqlite:///widgets.db")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*']
)

def add_variance(stock):
    pos_or_neg = random.randint(0, 1)
    randNum = random.uniform(1, 9)
    randNum = randNum if pos_or_neg == 1 else -randNum
    stock['last'] = round(stock['last'] + randNum, 2)
    return stock


def load_stock_data():
    response = requests.get(STOCK_DATA_PATH)
    return json.loads(response.text)

def load_risk_data():
    response = requests.get(RISK_DATA_PATH)
    return json.loads(response.text)
    


# define Widget model
class Widget(Base):
    __tablename__ = "widget_items"
    id = Column(Integer, primary_key=True, index=True)
    url = Column(String, index=True)
    appId = Column(String, index=True)
    remoteId = Column(String, index=True)

# define MenuItem model
class MenuItem(Base):
    __tablename__ = "menu_items"
    id = Column(Integer, primary_key=True, index=True)
    appId = Column(String, index=True)
    label = Column(String, index=True)

# create database tables
Base.metadata.create_all(bind=engine)

# define request model
class WidgetCreate(BaseModel):
    url: str
    appId: str
    remoteId: str

# define endpoints
@app.post("/widgets/")
async def create_widget(widget: WidgetCreate):
    db = SessionLocal()
    db_widget = Widget(url=widget.url, appId=widget.appId, remoteId=widget.remoteId)
    db.add(db_widget)
    db.commit()
    db.refresh(db_widget)
    return db_widget

@app.get("/widgets/")
async def read_widgets():
    db = SessionLocal()
    widgets = db.query(Widget).all()
    return widgets

@app.delete("/widgets/{widget_id}")
async def delete_widget(widget_id: int):
    db = SessionLocal()
    widget = db.query(Widget).filter(Widget.id == widget_id).first()
    if widget:
        db.delete(widget)
        db.commit()
        return {"message": "Widget deleted successfully"}
    return {"error": "Widget not found"}


@app.put("/widgets/{widget_id}")
async def update_widget(widget_id: int, widget):
    db = SessionLocal()
    db_widget = db.query(Widget).filter(Widget.id == widget_id).first()
    if not db_widget:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Widget not found")
    for field, value in widget.dict(exclude_unset=True).items():
        setattr(db_widget, field, value)
    db.commit()
    db.refresh(db_widget)
    return db_widget


# define request model
class MenuItemCreate(BaseModel):
    appId: str
    label: str

# define endpoints
@app.post("/menu/")
async def create_menu_item(menu_item: MenuItemCreate):
    db = SessionLocal()
    db_menu_item = MenuItem(appId=menu_item.appId, label=menu_item.label)
    db.add(db_menu_item)
    db.commit()
    db.refresh(db_menu_item)
    return db_menu_item

@app.put("/menu/{item_id}")
async def update_menu_item(item_id: int, menu_item):
    db = SessionLocal()
    db_menu_item = db.query(MenuItem).filter(MenuItem.id == item_id).first()
    if not db_menu_item:
        raise HTTPException(status_code=404, detail="Menu item not found")
    for field, value in menu_item.dict(exclude_unset=True).items():
        setattr(db_menu_item, field, value)
    db.commit()
    db.refresh(db_menu_item)
    return db_menu_item


@app.get("/menu/")
async def read_menu_items():
    db = SessionLocal()
    menu_items = db.query(MenuItem).all()
    return menu_items

@app.delete("/menu/{menu_item_id}")
async def delete_menu_item(menu_item_id: int):
    db = SessionLocal()
    menu_item = db.query(MenuItem).filter(MenuItem.id == menu_item_id).first()
    if menu_item:
        db.delete(menu_item)
        db.commit()
        return {"message": "Menu item deleted successfully"}
    return {"error": "Menu item not found"}

@app.get("/")
async def root():
    return {"message": "Welcome to StockAPI"}


@app.get('/stocks')
def get_all_stocks():
    stock_data = load_stock_data()
    return stock_data


@app.get('/stocklist')
def get_stock_list():
    stock_list = []
    stock_data = load_stock_data()
    for stock in stock_data:
        stock_list.append({'id': stock['id'], 'name': stock['name']})
    return stock_list


@app.get('/stocks/{id}')
def get_stock(id):
    response = load_stock_data()
    for stock_data in response:
        if stock_data['id'] == id:
            return add_variance(stock_data)
    return {}

@app.get('/risk/{id}')
def get_risk(id):
    response = load_risk_data()
    for risk_data in response:
        if risk_data['id'] == id:
            return risk_data
    return {}

async def generate_stock_prices(websocket, symbol):
    while True:
        # Generate a random stock price
        response = load_stock_data()
        data_to_send = {}
        for stock_data in response:
            if stock_data['id'] == symbol:
                data_to_send = add_variance(stock_data)
        # Send the dummy stock price to the client
        await websocket.send_text(json.dumps(data_to_send))
        await asyncio.sleep(2)


@app.websocket("/stockprices/{symbol}")
async def websocket_endpoint(websocket: WebSocket, symbol: str):
    await websocket.accept()
    await generate_stock_prices(websocket, symbol)


@app.get("/.well-known/pki-validation/0D53200C71F63CDD63C015997A9A691E.txt")
async def serve_validation_file():
    return FileResponse(".well-known/pki-validation/0D53200C71F63CDD63C015997A9A691E.txt")