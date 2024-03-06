import auth from "./auth";

export const signUp = async (user, navigate) => {
    try {
        const result = await auth.post("/register", user);
        navigate("/")
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
    }
};