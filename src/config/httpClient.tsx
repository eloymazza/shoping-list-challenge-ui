import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./config";

const httpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
