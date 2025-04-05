# Defines database tables using SQLAlchemy.

# SQLAlchemy is a popular Python SQL toolkit and Object Relational Mapper (ORM) 
# that allows developers to interact with databases using Python code instead of writing raw SQL queries

from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

# User Model
class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(100), nullable=False)

    # Relationship: One user can apply to many jobs
    applications = relationship("JobApplication", back_populates="user")


# Job Model
class Job(Base):
    __tablename__ = "jobs"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)
    company = Column(String(100), nullable=False)

    # Relationship: One job can have many applications
    applications = relationship("JobApplication", back_populates="job")


# JobApplication Model
class JobApplication(Base):
    __tablename__ = "job_applications"

    id = Column(Integer, primary_key=True, index=True)
    job_id = Column(Integer, ForeignKey("jobs.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    applied_at = Column(DateTime, default=datetime.utcnow)

    # Relationships to Job and User
    job = relationship("Job", back_populates="applications")
    user = relationship("User", back_populates="applications")
