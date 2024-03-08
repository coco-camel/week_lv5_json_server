import auth from "./userAxios";

export const signUp = async (id, password, navigate) => {
    try {
        const result = await auth.post("/register", { id, password });
        alert("회원가입이 완료 되었습니다.")
        navigate("/")
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
    }
};