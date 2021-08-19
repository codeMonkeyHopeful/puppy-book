import pandas as pd
import psycopg2
import json
from django.db.utils import OperationalError

#  pull in our config file that isn't tracked but hold Env vars
from jproperties import Properties

# intialize
configs = Properties()
# load all vars to the configs
with open("app-config.properties", "rb") as config_file:
    configs.load(config_file)


# def create_connection():
#     # create the actual connection to the DB leveraging the config vars
#     conn = psycopg2.connect(
#         host=str(configs.get("DB_HOST").data),
#         database=str(configs.get("DB_NAME").data),
#         user=str(configs.get("DB_USER").data),
#         password=str(configs.get("DB_PWD").data),
#         port=str(configs.get("PORT").data),
#     )
#     return conn


# def read_db(query):
#     # open the connection to the DB
#     conn = create_connection()
#     # Read the query and return the result
#     df = pd.read_sql(
#         str(query),
#         con=conn,
#     )
#     # close the connection to the DB
#     conn.close()
#     return df.to_json(orient="records")


def query_sql(query, type_of):
    # create the actual connection to the DB leveraging the config vars
    conn = psycopg2.connect(
        host=str(configs.get("DB_HOST").data),
        database=str(configs.get("DB_NAME").data),
        user=str(configs.get("DB_USER").data),
        password=str(configs.get("DB_PWD").data),
        port=str(configs.get("PORT").data),
    )

    cursor = conn.cursor()
    try:
        cursor.execute(query)
        conn.commit()
    except OperationalError as e:
        print(e)
    # pull out the results for passing back
    data = cursor.fetchall() if type_of == "get" else ""
    # close the connections to be safe and efficent
    cursor.close()
    conn.close()
    # return the results
    return data


# Setup the initial database with Brady as a user
# We also clear this out for testing as we will be modifying brady a lot
def initial_startup():

    create_schema_query = """
    CREATE SCHEMA IF NOT EXISTS puppy_book
    """

    query_sql(create_schema_query, "create_schema")

    create_user_table_query = """
    CREATE TABLE IF NOT EXISTS puppy_book.users
(
    user_id bigint NOT NULL,
    user_name text,
    user_email text,
    user_location text,
    name text,
    PRIMARY KEY (user_id)
);
    """

    query_sql(create_user_table_query, "create")

    truncate_query = """
        truncate puppy_book.users
    """
    query_sql(truncate_query, "truncate")

    create_query = """
    INSERT INTO puppy_book.users (user_id, user_name, user_email, user_location, name)
    VALUES ('1', 'bradyROX', 'bradyDaBone@gmail.com', 'Barkerville, OH', 'Brady')
    ON CONFLICT (user_id) DO NOTHING
    """

    query_sql(create_query, "create")

    return "Finshed Initalization"
