# This file manages the database connection.

# create_engine → This function creates a connection to the database.
from sqlalchemy import create_engine
# declarative_base → This function is used to create the base class for defining models (tables).
from sqlalchemy.ext.declarative import declarative_base
# sessionmaker → This function is used to create database sessions, which allow us to interact with the database.
from sqlalchemy.orm import sessionmaker

# Replace 'your_password' with your MySQL password
DATABASE_URL = "mysql+pymysql://recruiter:adim@localhost/recruitment_db"
# DATABASE_URL = SQLALCHEMY_DATABASE_URI

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

