from fastapi import FastAPI
from redis_om import get_redis_connection, HashModel
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os

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

class StockDetail(HashModel):
    id:str
    name:str
    stock_exchange:str
    open:float
    high:float
    low:float
    last:float