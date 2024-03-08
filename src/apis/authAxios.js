import axios from "axios";

const authAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});
export default authAxios;

// export const getAuthAxios = (token) => {
//     const authAxios = axios.create({
//         baseURL: process.env.REACT_APP_SERVER_URL,
//         headers: {
//             Authorization: token,
//         }
//     }
//     );
//     authAxios.interceptors.response.use(res => res, async error => {
//         if (await error.response.status === 401) {
//         }
//     })
//     return authAxios;
// }