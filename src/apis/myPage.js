import { getAuthAxios } from "./auth";
import { getCookie } from "../cookies/cookies";

export const getMyPage = async (navigate) => {
    const accessToken = getCookie("accessToken");
    const authAxios = getAuthAxios(accessToken, navigate);
    await authAxios.get("/user").then(res => res.data).catch(error => error);
};  