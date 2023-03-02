from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import json
import random
import asyncio
import json
import random
from utils import global_var
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

app = FastAPI()

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
    with open(global_var.STOCK_DATA_PATH) as f:
        return json.load(f)

def load_menu_data():
    with open(global_var.MENU_DATA_PATH) as f:
        return json.load(f)
    
def load_apps_data():
    with open(global_var.APPS_DATA_PATH) as f:
        return json.load(f)

def load_risk_data():
    with open(global_var.RISK_DATA_PATH) as f:
        return json.load(f)
    

@app.get("/widgets")
async def get_widgets():
    widgets = load_apps_data()
    return widgets

@app.get("/menu")
async def get_menu():
    widgets = load_menu_data()
    return widgets

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
