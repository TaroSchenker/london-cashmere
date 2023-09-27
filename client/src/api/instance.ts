import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://london-cashmere-server.onrender.com/api";

export const instance = axios.create({
  baseURL: API_BASE_URL,
});
