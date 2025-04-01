from sqlalchemy.orm import Session
import models, schemas

# Create a new user
def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(name=user.name, email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Create a new job
def create_job(db: Session, job: schemas.JobCreate):
    db_job = models.Job(title=job.title, description=job.description, company=job.company)
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job

# Get all jobs
def get_jobs(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Job).offset(skip).limit(limit).all()
