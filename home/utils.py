import pandas as pd
import psycopg2
import json

#  pull in our config file that isn't tracked but hold Env vars
from jproperties import Properties

configs = Properties()

with open("app-config.properties", "rb") as config_file:
    configs.load(config_file)


def create_connection():
    conn = psycopg2.connect(
        host=str(configs.get("DB_HOST").data),
        database=str(configs.get("DB_NAME").data),
        user=str(configs.get("DB_USER").data),
        password=str(configs.get("DB_PWD").data),
    )
    return conn


def query_db(query):
    conn = create_connection()
    df = pd.read_sql(
        str(query),
        con=conn,
        #     chunksize=False
    )
    return df.to_json(orient="records")
