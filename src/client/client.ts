import axios from "axios";
import { store } from "../store/store";

// this is for creating axios instance

export const BASE_URL  = 'http://localhost:8080'

const axiosInstance = axios.create({
    baseURL : BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
// intercept the token to send
axiosInstance.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token; 

        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default axiosInstance;
