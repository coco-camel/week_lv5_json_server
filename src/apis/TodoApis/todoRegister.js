import auth from "./todoAxios";

export const todoRegister = async (title, contents) => {
    try {
        const result = await auth.post("/todos", { title, contents, done: false });
        alert("등록이 완료 되었습니다.")
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert(error.response.data.message);
        }
    }
};