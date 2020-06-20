import * as axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    responseType: 'json'
})


export default instance;
