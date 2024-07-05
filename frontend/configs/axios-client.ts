import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export default axiosClient;
