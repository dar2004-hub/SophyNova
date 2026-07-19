import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VIT_API_URL,
});

export default api;