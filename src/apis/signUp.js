import auth from "./auth";

export const signUp = async (user) => {
    try {
        const result = await auth.post("/register", user);
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert("아이디또는 비밀번호를 확인해주세요.");
        }
    }
};