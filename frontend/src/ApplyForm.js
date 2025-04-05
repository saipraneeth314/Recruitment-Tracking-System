// import React, { useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import { Container, TextField, Button, Typography } from "@mui/material";

// const ApplyForm = () => {
//     const { jobId } = useParams();  // Get job ID from URL
//     const navigate = useNavigate();

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [resume, setResume] = useState(null);
//     const [error, setError] = useState(null);

//     const handleFileChange = (event) => {
//         setResume(event.target.files[0]);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!name || !email || !resume) {
//             setError("All fields are required!");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("email", email);
//         formData.append("resume", resume);

//         try {
//             await axios.post(`http://localhost:8000/jobs/${jobId}/apply`, formData, {
//                 headers: { "Content-Type": "multipart/form-data" }
//             });

//             alert("Application submitted successfully!");
//             navigate("/"); // Redirect back to job list
//         } catch (error) {
//             console.error("Error applying for job:", error);
//             setError("Failed to submit application.");
//         }
//     };

//     return (
//         <Container>
//             <Typography variant="h4">Apply for Job</Typography>

//             {error && <Typography color="error">{error}</Typography>}

//             <form onSubmit={handleSubmit}>
//                 <TextField label="Full Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
//                 <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
//                 <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ marginTop: "10px" }} />

//                 <Button type="submit" variant="contained" color="primary" style={{ marginTop: "10px" }}>
//                     Submit Application
//                 </Button>
//             </form>
//         </Container>
//     );
// };

// export default ApplyForm;



import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography } from "@mui/material";

const ApplyForm = () => {
    const { jobId } = useParams();  // Get job ID from URL
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setResume(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !email || !resume) {
            setError("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("resume", resume);

        try {
            await axios.post(`http://localhost:8000/jobs/${jobId}/apply`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            alert("Application submitted successfully!");
            navigate("/"); // Redirect back to job list
        } catch (error) {
            console.error("Error applying for job:", error);
            setError("Failed to submit application.");
        }
    };

    return (
        <Container>
            <Typography variant="h4">Apply for Job</Typography>

            {error && <Typography color="error">{error}</Typography>}

            <form onSubmit={handleSubmit}>
                <TextField label="Full Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
                <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ marginTop: "10px" }} />

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: "10px" }}>
                    Submit Application
                </Button>
            </form>
        </Container>
    );
};

export default ApplyForm;
