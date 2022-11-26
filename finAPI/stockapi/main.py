from fastapi import FastAPI
from redis_om import get_redis_connection, HashModel
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os
import requests
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
    randNum = random.uniform(1, 15)
    randNum = randNum if pos_or_neg == 1 else -randNum
    stock['last'] = round(stock['last'] + randNum, 2)
    return stock


def load_data():
    with open(global_var.STOCK_DATA_PATH) as f:
        return json.load(f)


@app.get("/")
async def root():
    return {"message": "Welcome to StockAPI"}


@app.get('/stocks')
def get_all_stocks():
    stock_data = load_data()
    return stock_data

@app.get('/stocklist')
def get_stock_list():
    stock_list = []
    stock_data = load_data()
    for stock in stock_data:
        stock_list.append({'id':stock['id'], 'name':stock['name']})
    return stock_list


@app.get('/stocks/{id}')
def get_stock(id):
    response = load_data()
    for stock_data in response:
        if stock_data['id'] == id:
            return add_variance(stock_data)
    return {}
