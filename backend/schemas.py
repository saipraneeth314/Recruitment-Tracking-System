# BaseModel Features:
# Automatic Data Validation: Ensures data matches expected types.
# Serialization & Deserialization: Converts objects to JSON and vice versa.
# Custom Validation: Allows adding custom validation rules.
# Type Hinting Support: Works seamlessly with Python type hints

from pydantic import BaseModel

# User Schema
class UserCreate(BaseModel):
    name: str
    email: str
    password: str

# Used to return user data without exposing the password.
class UserResponse(BaseModel):
    id: int
    name: str
    email: str

    class Config:
        from_attributes = True

# Job Schema
# Defines required fields for job creation.
class JobCreate(BaseModel):
    title: str
    description: str
    company: str
    
# Used to return job details.
class JobResponse(BaseModel):
    id: int
    title: str
    description: str
    company: str

    class Config:
        from_attributes = True

# Job Application Schema
class JobApplicationCreate(BaseModel):
    user_id: int


# Response schema for a job application
class JobApplicationResponse(BaseModel):
    id: int
    job_id: int
    user_id: int

    class Config:
        from_attributes = True
        
# # For login
# class UserLogin(BaseModel):
#     email: str
#     password: str