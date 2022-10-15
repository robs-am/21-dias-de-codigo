import axios from 'axios';

const api = axios.create({
    baseURL: "https://www.rijksmuseum.nl/api/nl/collection?key=a244aHGy"
});


export default api;