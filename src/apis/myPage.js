import { getAuthAxios } from "./auth";
import { getCookie } from "../cookies/cookies";

export const getMyPage = async () => {
    const accessToken = getCookie("accessToken");
    const authAxios = getAuthAxios(accessToken);
    const result = await authAxios.get("/user");
    return result.data;
};  