import { useState } from "react";

export const useForm = () => {
    const [value, setValue] = useState("");
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };
    return [value, onChangeHandler];
};