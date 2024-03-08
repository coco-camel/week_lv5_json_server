import auth from "./todoAxios";

export const getTodoList = async () => {
    try {
        const result = await auth.get("/todos");
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
    }
};