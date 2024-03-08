import auth from "./authAxios";

export const signUp = async (id, password, navigate) => {
    try {
        const result = await auth.post("/register", { id, password });
        navigate("/")
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
    }
};