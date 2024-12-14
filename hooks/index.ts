// Import the axios library
import axiosOriginal from "axios";

// Create an instance of axios with custom configuration
const axios = axiosOriginal.create({
  // Set the base URL for the axios instance
  baseURL: "https://api.8sqft.com",
});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
