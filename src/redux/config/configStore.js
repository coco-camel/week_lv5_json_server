import todosSlice from "../modules/todosSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: { todosReducer: todosSlice }
})

export default store;