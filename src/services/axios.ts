import axios from "axios";

export function getAPIClient(ctx?: any) {
  const api = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  return api;
}
