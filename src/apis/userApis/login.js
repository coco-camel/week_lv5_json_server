import auth from "./userAxios";
import { setCookie } from "../../cookies/cookies";

export const login = async (id, password, navigate) => {
    try {
        const result = await auth.post("/login", { id, password },);
        const { token } = result.data;
        setCookie("accessToken", "Bearer " + token);
        navigate("/todomain");
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
        return error.response
    }
};

