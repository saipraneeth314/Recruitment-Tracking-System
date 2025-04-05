import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api"; // Adjust based on backend

export const getJobs = async () => {
  return axios.get(`${API_BASE_URL}/jobs`);
};

export const getCandidates = async () => {
  return axios.get(`${API_BASE_URL}/candidates`);
};