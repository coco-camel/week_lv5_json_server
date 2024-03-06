import auth from "./auth";
import { setCookie } from "../cookies/cookies";

export const login = async (user) => {
    try {
        const result = await auth.post("/login", user);
        const { token } = result;
        setCookie("accessToken", "Bearer " + token);
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert("아이디또는 비밀번호를 확인해주세요.");
        }
    }
};