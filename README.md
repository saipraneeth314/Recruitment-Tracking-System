## Project Overview
This is a **Job Portal** built using React.js for the frontend and Python (Flask) with MySQL (XAMPP) for the backend. 
The system allows recruiters to post jobs and candidates to apply for them.

## Tech Stack
- **Frontend:** React.js, Bootstrap, Axios
- **Backend:** Flask (Python), MySQL (XAMPP)
- **Database:** MySQL
- **API Testing:** Curl

##  Installation & Setup

###  Backend Setup (Flask + MySQL)
1. Install XAMPP and start Apache & MySQL.
2. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/job-portal.git
   ```
3. Navigate to the backend directory:  
   ```bash
   cd backend
   ```
4. Install dependencies:  
   ```bash
   pip install -r requirements.txt
   ```
5. Configure MySQL Database (config.py).
   ```
      DB_HOST = "localhost"
      DB_USER = "root"
      DB_PASSWORD = ""
      DB_NAME = "job_management"
   ```
6. Run the Flask server:  
   ```bash
   python app.py
   ```

###  Frontend Setup (React.js)
1. Navigate to the frontend directory:  
   ```bash
   cd frontend
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the development server:  
   ```bash
   npm start
   ```

##  API Documentation
Use **cURL** to test API endpoints.

Example API Call using cURL:  
```bash
curl -X GET http://localhost:5000/api/jobs
```
Example Response:
```json
{
  "jobs": [
    {
      "id": 1,
      "title": "Software Engineer",
      "company": "TechCorp",
      "location": "Remote"
    }
  ]
}
```







