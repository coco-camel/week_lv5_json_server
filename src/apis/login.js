import auth from "./auth";
import { setCookie } from "../cookies/cookies";

export const login = async (user, navigate) => {
    try {
        const result = await auth.post("/login", user);
        const { token } = result.data;
        setCookie("accessToken", "Bearer " + token);
        navigate("/mypage");
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
        return error.response
    }
};