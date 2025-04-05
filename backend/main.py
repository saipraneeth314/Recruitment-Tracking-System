from fastapi import FastAPI
import models
from database import engine
from routes import router
from fastapi.middleware.cors import CORSMiddleware

# Creates an instance of the FastAPI application.
app = FastAPI()

# Enable CORS
# Cross-Origin Resource Sharing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (you can specify certain domains for security)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Create database tables
# models.Base → This is the base class for all database tables, defined in models.py
# metadata.create_all(bind=engine) → This creates all tables in the database if they don’t already exist.
models.Base.metadata.create_all(bind=engine)

# Include API routes
# connects all API routes from routes.py to our app.
# handle different API requests like GET, POST, PUT, etc.
app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Recruitment API!"}
