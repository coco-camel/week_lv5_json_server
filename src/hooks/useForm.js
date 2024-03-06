import { useState } from "react";

export const useForm = () => {
    const [user, setUser] = useState({
        id: "",
        password: "",
    });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    return [user, onChangeHandler];
};