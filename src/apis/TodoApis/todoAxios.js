import axios from "axios";

const todoAxios = axios.create({
    baseURL: process.env.REACT_APP_TODOS_URL,
});
export default todoAxios;