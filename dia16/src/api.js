import axios from 'axios';

const api = axios.create({
    baseURL: "https://www.rijksmuseum.nl/api/en"
});


export default api;