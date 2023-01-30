import axios from "axios";


const instance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Accept': 'application/json',
        "X-Requested-With": "XMLHttpRequest"
    }
});

export default instance ;
