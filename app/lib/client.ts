import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

export interface ErrorResponse {
  message: string;
}

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ErrorResponse>) => {
    if (error.response?.data) {
      error.message = error.response.data.message;
    }
    return Promise.reject(error);
  },
);

export const httpClient = axiosInstance;
