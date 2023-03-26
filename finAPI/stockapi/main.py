from fastapi import FastAPI, WebSocket, HTTPException, status, Response
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO
import aiohttp
import requests
from pathlib import Path
import json
import random
import os
import asyncio
import json
from dotenv import load_dotenv, find_dotenv
from pydantic import BaseModel
from pymongo import MongoClient

STOCK_DATA_PATH = 'https://raw.githubusercontent.com/madhavms/react-host-remote/main/finAPI/stockapi/data_source/stock_data.json'
RISK_DATA_PATH = 'https://raw.githubusercontent.com/madhavms/react-host-remote/main/finAPI/stockapi/data_source/risk_data.json'
MENU_DATA_PATH = './data_source/menu_data.json'
APPS_DATA_PATH = './data_source/apps_data.json'

load_dotenv(find_dotenv())

app = FastAPI()

# retrieve MongoDB Atlas connection string from environment variable
mongo_client_address = 'mongodb+srv://madhavmanohars:Babloooo17@cluster0.b0cho3r.mongodb.net/?retryWrites=true&w=majority'

# create MongoDB client and database
client = MongoClient(mongo_client_address)
db = client['micromeshdb']


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
class Widget(BaseModel):
    url: str
    appId: str
    remoteId: str

# define MenuItem model
class MenuItem(BaseModel):
    appId: str
    label: str


# define request model
class WidgetCreate(BaseModel):
    url: str
    appId: str
    remoteId: str


# define request model
class MenuItemCreate(BaseModel):
    appId: str
    label: str


# define endpoints
@app.post("/widgets/")
async def create_widget(widget: WidgetCreate):
    widget_dict = widget.dict()
    result = db.widgets.insert_one(widget_dict)
    widget_dict['_id'] = str(result.inserted_id)
    return widget_dict

@app.get("/widgets/")
async def read_widgets():
    widgets = list(db.widgets.find())
    for widget in widgets:
        widget['_id'] = str(widget['_id'])
    return widgets

@app.delete("/widgets/{widget_id}")
async def delete_widget(widget_id: str):
    result = db.widgets.delete_one({'_id': widget_id})
    if result.deleted_count > 0:
        return {"message": "Widget deleted successfully"}
    return {"error": "Widget not found"}


@app.put("/widgets/{widget_id}")
async def update_widget(widget_id: str, widget: Widget):
    widget_dict = widget.dict(exclude_unset=True)
    result = db.widgets.update_one({'_id': widget_id}, {'$set': widget_dict})
    if result.modified_count > 0:
        widget_dict['_id'] = widget_id
        return widget_dict
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Widget not found")


# define endpoints
@app.post("/menu/")
async def create_menu_item(menu_item: MenuItemCreate):
    menu_item_dict = menu_item.dict()
    result = db.menu    .insert_one(menu_item_dict)
    menu_item_dict['_id'] = str(result.inserted_id)
    return menu_item_dict

@app.put("/menu/{item_id}")
async def update_menu_item(item_id: str, menu_item: MenuItem):
    menu_item_dict = menu_item.dict(exclude_unset=True)
    result = db.menu.update_one({'_id': item_id}, {'$set': menu_item_dict})
    if result.modified_count > 0:
        menu_item_dict['_id'] = item_id
        return menu_item_dict
    raise HTTPException(status_code=404, detail="Menu item not found")

@app.get("/menu/")
async def read_menu_items():
    menu_items = list(db.menu.find())
    for menu_item in menu_items:
        menu_item['_id'] = str(menu_item['_id'])
    return menu_items

@app.delete("/menu/{menu_item_id}")
async def delete_menu_item(menu_item_id: str):
    result = db.menu.delete_one({'_id': menu_item_id})
    if result.deleted_count > 0:
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

