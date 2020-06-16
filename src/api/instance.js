import * as axios from "axios";

const instance = axios.create({
    baseURL: '/api/products',
    withCredentials: true,
    responseType: 'json'
})


export default instance;
