from fastapi import FastAPI
from redis_om import get_redis_connection, HashModel
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os
import requests
import json

from utils import global_var

from dotenv import load_dotenv, find_dotenv


load_dotenv(find_dotenv())

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000','http://localhost:3001'],
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get("/")
async def root():
    return {"message": "Welcome to StockAPI"}

@app.get('/stocks')
def get_all_stocks():
    res = requests.get(global_var.STOCK_DATA_URL)
    stock_data = json.loads(res.text)
    return stock_data


@app.get('/stocks/{id}')
def get_stock(id):
    res = requests.get(global_var.STOCK_DATA_URL)
    response = json.loads(res.text)
    for stock_data in response:
        if stock_data['id'] == id:
            return stock_data
    return {}
