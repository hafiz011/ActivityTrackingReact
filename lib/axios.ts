import axios from "axios";
import { API_BASE_URL } from "./api";

const instance = axios.create({
  baseURL: API_BASE_URL,
});

// Use a looser type here to avoid the import error
instance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
