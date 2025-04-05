# Defines FastAPI routes for handling user and job-related API requests.

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import crud, schemas, models
from typing import List

router = APIRouter()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create a new user
@router.post("/users/", response_model=schemas.UserResponse)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    """Creates a new user if email is not already registered."""
    existing_user = crud.get_user_by_email(db, user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

# Create a new job
@router.post("/jobs/", response_model=schemas.JobResponse)
def create_job(job: schemas.JobCreate, db: Session = Depends(get_db)):
    """Creates a new job posting."""
    return crud.create_job(db=db, job=job)

# Get all jobs with pagination
@router.get("/jobs/", response_model=List[schemas.JobResponse])
def read_jobs(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    """Fetches all job postings with pagination."""
    jobs = crud.get_jobs(db=db, skip=skip, limit=limit)
    if not jobs:
        raise HTTPException(status_code=404, detail="No jobs found")
    return jobs

# Apply for a job
@router.post("/jobs/{job_id}/apply")
def apply_for_job(job_id: int, db: Session = Depends(get_db)):
    """Handles job application by storing the application record in the database."""
    
    job = db.query(models.Job).filter(models.Job.id == job_id).first()
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    # Assuming there is a JobApplication model to track applications
    application = models.JobApplication(job_id=job.id)
    
    db.add(application)
    db.commit()
    db.refresh(application)

    return {"message": f"Successfully applied for {job.title} at {job.company}"}


# @router.post("/login", response_model=schemas.LoginResponse)
# def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
#     db_user = crud.get_user_by_email(db, user.email)
#     if not db_user or db_user.password != user.password:
#         raise HTTPException(status_code=401, detail="Invalid email or password")
    
#     return {"message": "Login successful", "user_id": db_user.id}
