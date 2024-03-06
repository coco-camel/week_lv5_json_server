import axios from "axios";

const authAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});
export default authAxios;

export const getAuthAxios = (token) => {
    const authAxios = axios.create({
        baseURL: process.env.REACT_APP_SERVER_URL,
        headers: {
            Authorization: token,
        }
    }
    );
    authAxios.interceptors.response.use(res => res, async error => {
        if (error.response.status === 401) {
            window.location.href = '/';
            // 흠... 다른건 왜 안되는거지....
        }
        return Promise.reject(error);
    })
    return authAxios;
}