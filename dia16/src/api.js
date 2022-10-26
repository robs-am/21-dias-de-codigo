
import axios from 'axios';

const api = axios.create({
    baseURL: "https://www.freetogame.com/api/games",
})

export default api;