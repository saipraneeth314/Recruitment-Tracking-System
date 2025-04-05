#  Recruitment Tracking System

A full-stack web application to manage job postings and applications, built using **React.js** for the frontend, **FastAPI (Python)** for the backend, and **MySQL (XAMPP)** as the database.

---

## Project Overview

This **Recruitment Tracking System** allows recruiters to:
- Post job listings
- View available job roles
- Accept candidate applications via an interactive form

And allows candidates to:
- Browse and search job listings
- Apply to jobs via a user-friendly UI

---

## Tech Stack
- **Frontend:** React.js, Bootstrap, Axios
- **Backend:** FastAPI (Python), MySQL (via XAMPP)
- **Database:** MySQL
- **API Testing:** Curl

---

##  Installation & Setup

###  Backend Setup (FastAPI + MySQL)
1. Install XAMPP:</br>
   Download and install XAMPP.</br>
   Start both Apache and MySQL from the XAMPP Control Panel.
2. **Clone the repository**:  
   ```bash
   git clone https://github.com/saipraneeth314/Recruitment-Tracking-System.git
   ```
3. **Navigate to the backend folder**:  
   ```bash
   cd Recruitment-Tracking-System/backend
   ```
4. **Create Virtual Environment**:
   ```bash
   python -m venv venv
   ```
   Activate the Virtual Environment: venv/bin/activate 
5. **Install dependencies**:  
   ```bash
   pip install -r requirements.txt
   ```
6. **Configure MySQL Database in 'config.py'**:
   ```python
      DB_HOST = "localhost"
      DB_USER = "root"
      DB_PASSWORD = ""
      DB_NAME = "job_management"
   ```
7. **Create the Database**:<br>
   Go to http://localhost/phpmyadmin</br>
   Create a new database named:
   ``` 
      job_management
   ```
8. **Run FastAPI Server**:  
   ```bash
   uvicorn main:app --reload
   ```
9. **Test the API Open your browser and go to**:
   [http://localhost:8000](http://localhost:8000)
  
 ----

###  Frontend Setup (React.js)
1. **Navigate to the frontend directory**:  
   ```bash
   cd Recruitment-Tracking-System/frontend
   ```
2. **Install dependencies**:  
   ```bash
   npm install
   ```
3. **Start the React app**:  
   ```bash
   npm start
   ```
4. **Open in browser**:  
   [http://localhost:3000](http://localhost:3000)

---

## API Documentation

FastAPI comes with interactive API documentation.

### Swagger UI  
[http://localhost:8000/docs](http://localhost:8000/docs)

### ReDoc  
[http://localhost:8000/redoc](http://localhost:8000/redoc)


## Example API Calls

You can also test endpoints manually using curl.

### Get All Jobs  
**Endpoint:** `GET /jobs/`  
**Description:** Fetch all job listings.

#### cURL Example (Windows PowerShell):
```bash
curl.exe -X GET http://localhost:8000/jobs/
```

#### Sample Response:
```json
[
  {
    "id": 5,
    "title": "Generative AI - II",
    "description": "Works with the latest Generative AI models and builds user-friendly applications",
    "company": "Google"
  }
]
```

### Add a New Job  
**Endpoint:** `POST /jobs/` 
**Description:** Add a new job to the database.

#### Request Body (JSON):
```json
[
   {
      "title": "Frontend Developer",
      "description": "Build UI components",
      "company": "DesignCo"
   }
]
```

#### cURL Command:
```bash
curl -X POST http://localhost:8000/jobs/ \
-H "Content-Type: application/json" \
-d '{"title": "Frontend Developer", "description": "Build UI components", "company": "DesignCo"}'
```

#### Sample Response:
```json
[
   {
      "id": 6,
      "title": "Frontend Developer",
      "description": "Build UI components",
      "company": "DesignCo"
   }
]
```

---

##  Author

- **Kasam Sai Praneeth**  
  GitHub: [@saipraneeth314](https://github.com/saipraneeth314)

---