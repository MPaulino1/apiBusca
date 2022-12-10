import axios from "axios";

const api = axios.create({
    baseURL: 'https://apisearch.azurewebsites.net/', 
});

export default api;