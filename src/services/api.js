import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// token dari local
const token = localStorage.getItem("token");

// brearier token
api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
