import todosSlice from "../modules/todosSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: { todosReducer: todosSlice },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;