import { Card, CardContent, Typography } from "@mui/material";

export default function CandidateCard({ candidate }) {
  return (
    <Card sx={{ margin: "10px" }}>
      <CardContent>
        <Typography variant="h5">{candidate.name}</Typography>
        <Typography>{candidate.email}</Typography>
      </CardContent>
    </Card>
  );
}
