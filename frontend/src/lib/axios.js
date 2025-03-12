// import axios from "axios"

// export const axiosInstance = axios.create({
//     baseURL: "http://localhost:5001/api",
//     withCredentials: true,
// })     



import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,  // Keep this if using authentication (cookies, JWT, etc.)
});
