import pandas as pd
import psycopg2
import json

#  pull in our config file that isn't tracked but hold Env vars
from jproperties import Properties

# intialize
configs = Properties()
# load all vars to the configs
with open("app-config.properties", "rb") as config_file:
    configs.load(config_file)


def create_connection():
    # create the actual connection to the DB leveraging the config vars
    conn = psycopg2.connect(
        host=str(configs.get("DB_HOST").data),
        database=str(configs.get("DB_NAME").data),
        user=str(configs.get("DB_USER").data),
        password=str(configs.get("DB_PWD").data),
        port=str(configs.get("PORT").data),
    )
    return conn


def query_db(query):
    # open the connection to the DB
    conn = create_connection()
    # Read the query and return the result
    df = pd.read_sql(
        str(query),
        con=conn,
    )
    # close the connection to the DB
    conn.close()
    return df.to_json(orient="records")
