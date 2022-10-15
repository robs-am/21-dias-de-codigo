
import axios from 'axios';

const api = axios.create({
    baseURL: "https://www.freetogame.com/api/",
})

export default api;