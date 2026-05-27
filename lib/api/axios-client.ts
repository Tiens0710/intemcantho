import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "@/lib/apiResponse"; // Reuse the existing type

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";
const API_MODE = process.env.NEXT_PUBLIC_API_MODE || "mock";

const axiosClient = axios.create({
  baseURL: API_MODE === "live" ? API_URL : "/api/v1", // Use local mock API or real backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to add token (if any)
axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // In real app, you might get token from cookies or context
  // For now, we rely on the existing apiClient logic or server-side session
  return config;
});

// Interceptor to unwrap EC/EM/DT response
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const body = response.data as ApiResponse;
    if (body.EC !== 0) {
      return Promise.reject(new Error(body.EM));
    }
    return body.DT; // Return only the Data part
  },
  (error: any) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
