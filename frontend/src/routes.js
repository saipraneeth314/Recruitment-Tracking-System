import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import CandidateList from "./pages/CandidateList";
import Dashboard from "./pages/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/candidates" element={<CandidateList />} />
      </Routes>
    </BrowserRouter>
  );
}
