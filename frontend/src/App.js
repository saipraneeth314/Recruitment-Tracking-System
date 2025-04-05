// This is the main component of the recruitment tracker application.
// It includes a job listing page where users can view, add, and search for jobs.
// It also includes a routing setup to navigate to an application form page for each job.
// The application uses React Router for navigation and Material-UI for styling.

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button, TextField, List, Typography, Card, CardContent } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import ApplyForm from "./ApplyForm"; // Import application form page

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // Fetch jobs when component mounts
    useEffect(() => {
        axios.get("http://localhost:8000/jobs/")
            .then((res) => setJobs(res.data))
            .catch((err) => console.error("Error fetching jobs:", err));
    }, []);

    // Function to add a new job
    const addJob = () => {
        if (!title || !description || !company) {
            setError("All fields are required!");
            return;
        }

        // Check if job already exists
        const jobExists = jobs.some(job => job.title.toLowerCase() === title.toLowerCase());
        if (jobExists) {
            setError("Job with this title already exists!");
            return;
        }

        // Sends a POST request to add a job to the backend.
        axios.post("http://localhost:8000/jobs/", { title, description, company })
            .then((res) => {
                setJobs([...jobs, res.data]);
                setTitle("");
                setDescription("");
                setCompany("");
                setError(null);
            })
            .catch((err) => {
                console.error("Error adding job:", err);
                setError("Failed to add job. Please try again.");
            });
    };

    // Filter jobs based on search term
    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Recruitment Tracker
            </Typography>

            {/* Search Bar */}
            <TextField 
                label="Search Jobs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                margin="normal"
            />

            {/* Job Input Fields */}
            <TextField label="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal"/>
            <TextField label="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal"/>
            <TextField label="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} fullWidth margin="normal"/>

            {/* Error Message */}
            {error && <Typography color="error">{error}</Typography>}

            {/* Add Job Button */}
            <Button variant="contained" color="primary" onClick={addJob} style={{ marginTop: "10px" }}>
                Add Job
            </Button>

            {/* Job List */}
            <List sx={{ marginTop: "20px" }}>
                {filteredJobs.length === 0 ? (
                    <Typography>No jobs found.</Typography>
                ) : (
                    filteredJobs.map((job) => (
                        <Card key={job.id} sx={{ margin: "10px 0", padding: "10px" }}>
                            <CardContent>
                                <Typography variant="h6">{job.title}</Typography>
                                <Typography>{job.description}</Typography>
                                <Typography fontWeight="bold">{job.company}</Typography>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    onClick={() => navigate(`/apply/${job.id}`)} // Navigate to Apply Page
                                    sx={{ marginTop: "10px" }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                )}
            </List>
        </Container>
    );
};

// Main App Component with Routing
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<JobList />} />
                <Route path="/apply/:jobId" element={<ApplyForm />} />
            </Routes>
        </Router>
    );
};

export default App;
