import axios from "axios";

// Create an Axios instance with a base URL
const adminaxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  
});

adminaxiosInstance.interceptors.request.use(
  (config) => {
    const tokenString = localStorage.getItem("adminToken");
    if (tokenString) {
      try {
        const token = JSON.parse(tokenString);

        config.headers.authorization = `Bearer ${token}`;
      } catch (error) {
        // Handle JSON parsing error, if any
        console.error("Error parsing token:", error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminaxiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.message === "jwt expired") {
      localStorage.removeItem("userToken");
      window.location.replace("/student/login");
    }
    return response;
  },
  (error) => {
    console.error(error);
    if (error?.response?.data?.message === "jwt expired") {
      localStorage.removeItem("userToken");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

// Export the Axios instance for use in other parts of your application
export default adminaxiosInstance;