import axios from 'axios';

const Route = '';

export const myAxios = axios.create({
    timeout: 5000,
    baseURL: Route,
    headers: {
        "Content-Type": "application/json"
    }
})