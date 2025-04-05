import { Card, CardContent, Typography } from "@mui/material";

export default function JobCard({ job }) {
  return (
    <Card sx={{ margin: "10px" }}>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography>{job.department}</Typography>
      </CardContent>
    </Card>
  );
}
