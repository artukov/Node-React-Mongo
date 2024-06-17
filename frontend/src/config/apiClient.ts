import axios from "axios";

const options = {
    baseURL: 'http://localhost:4004',
    withCredentials: true
}

const API = axios.create(options);

API.interceptors.response.use(
    (response) => response,
    (error) => {
        const { status, data } = error.response;
        return Promise.reject({status, ...data});
    }
)

export default API;

