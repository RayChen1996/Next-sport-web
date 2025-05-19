import axios from "axios";

const URL =
  process.env.BASE_URL || "https://json-server-vercel-w33n.vercel.app";

export const api = axios.create({
  baseURL: URL,
});
