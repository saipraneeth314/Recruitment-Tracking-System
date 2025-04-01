# from fastapi import FastAPI, Depends
# from sqlalchemy.orm import Session
# from database import SessionLocal, engine
# from models import Job, Candidate
# from schemas import JobCreate, CandidateCreate

# app = FastAPI()

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# @app.post("/jobs/")
# def create_job(job: JobCreate, db: Session = Depends(get_db)):
#     db_job = Job(**job.dict())
#     db.add(db_job)
#     db.commit()
#     db.refresh(db_job)
#     return db_job

# @app.get("/jobs/")
# def get_jobs(db: Session = Depends(get_db)):
#     return db.query(Job).all()

# @app.post("/candidates/")
# def create_candidate(candidate: CandidateCreate, db: Session = Depends(get_db)):
#     db_candidate = Candidate(**candidate.dict())
#     db.add(db_candidate)
#     db.commit()
#     db.refresh(db_candidate)
#     return db_candidate


from fastapi import FastAPI
import models
from database import engine
from routes import router

app = FastAPI()

# Create database tables
models.Base.metadata.create_all(bind=engine)

# Include API routes
app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Recruitment API!"}
