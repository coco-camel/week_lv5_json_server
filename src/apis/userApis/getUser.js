import auth from "./userAxios";
import { getCookie } from "../../cookies/cookies";

export const getUser = async () => {
    const token = getCookie("accessToken");
    try {
        const result = await auth.get("/user", {
            headers: {
                Authorization: token,
            }
        });
        console.log(result);
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
        return error.response
    }
};