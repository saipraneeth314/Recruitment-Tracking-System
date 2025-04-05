// import { useEffect, useState } from "react";
// import { getCandidates } from "../services/api";
// import { Container, Card, CardContent, Typography } from "@mui/material";

// export default function CandidateList() {
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     getCandidates().then((response) => setCandidates(response.data));
//   }, []);

//   return (
//     <Container>
//       <h2>Candidate List</h2>
//       {candidates.map((candidate) => (
//         <Card key={candidate.id} sx={{ margin: "10px" }}>
//           <CardContent>
//             <Typography variant="h5">{candidate.name}</Typography>
//             <Typography>{candidate.email}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Container>
//   );
// }


import { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import { getCandidates } from "../services/api";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getCandidates().then((data) => setCandidates(data));
  }, []);

  return (
    <div>
      <h2>Candidate Applications</h2>
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
}
