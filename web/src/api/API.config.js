import axios from "axios";

// Create base URL API
export const API = axios.create({
    baseURL: "http://localhost:8080/api",
});