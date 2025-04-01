from pydantic import BaseModel

# User Schema
class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

    class Config:
        from_attributes = True

# Job Schema
class JobCreate(BaseModel):
    title: str
    description: str
    company: str

class JobResponse(BaseModel):
    id: int
    title: str
    description: str
    company: str

    class Config:
        from_attributes = True
