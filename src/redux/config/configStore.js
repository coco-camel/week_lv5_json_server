import todosReducer from "../modules/todosSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: { todosReducer }
})

export default store;