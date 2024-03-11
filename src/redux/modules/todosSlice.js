import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodoList, todoRegister, todoRemove, todoToggle, todoModify } from "../../apis/TodoApis/todoList";

export const __getTodos = createAsyncThunk(
    'get/todos',
    async () => {
        const result = await getTodoList();
        return result;
    });

export const __todoRegister = createAsyncThunk(
    'todos/register',
    async (todo) => {
        const result = await todoRegister(todo);
        return result;
    });

export const __todoRemove = createAsyncThunk(
    'todos/remove',
    async (id) => {
        await todoRemove(id);
        // 버전문제.....
        return id;
    });

export const __todoToggle = createAsyncThunk(
    'todos/toggle',
    async (todo) => {
        const result = await todoToggle(todo);
        return result;
    });

export const __todoModify = createAsyncThunk(
    'todos/modify',
    async (todo) => {
        const result = await todoModify(todo);
        return result;
    });

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: true,
    },
    reducers: {},
    extraReducers:
        (builder) => {
            builder.addCase(__getTodos.pending, (state) => {
                state.loading = true;
            });
            builder.addCase(__getTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            });

            builder.addCase(__todoRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = [...state.todos, action.payload];
            });

            builder.addCase(__todoRemove.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            });

            builder.addCase(__todoToggle.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo);
            });

            builder.addCase(__todoModify.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
            });
        }
});

export default todosSlice.reducer;

