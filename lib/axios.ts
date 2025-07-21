import axios from "axios";

const instance = axios.create({
  baseURL: "http://31.97.203.233:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Safe interceptor
instance.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  if (!config.headers) {
    config.headers = {}; // Ensure headers object exists
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
