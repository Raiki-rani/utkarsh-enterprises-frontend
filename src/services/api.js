import axios from "axios";

const api = axios.create({
    baseURL: "https://utkarsh-enterprises-production.up.railway.app",
});

export default api;