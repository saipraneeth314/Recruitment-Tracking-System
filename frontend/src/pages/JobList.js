// import { useEffect, useState } from "react";
// import { getJobs } from "../services/api";
// import { Container, Card, CardContent, Typography } from "@mui/material";

// export default function JobList() {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     getJobs().then((response) => setJobs(response.data));
//   }, []);

//   return (
//     <Container>
//       <h2>Job Listings</h2>
//       {jobs.map((job) => (
//         <Card key={job.id} sx={{ margin: "10px" }}>
//           <CardContent>
//             <Typography variant="h5">{job.title}</Typography>
//             <Typography>{job.department}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Container>
//   );
// }


import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { getJobs } from "../services/api";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h2>Job Openings</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
