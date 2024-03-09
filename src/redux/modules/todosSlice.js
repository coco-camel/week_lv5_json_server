import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodoList, todoRegister, todoRemove, todoToggle } from "../../apis/TodoApis/todoList";

export const getTodos = createAsyncThunk(
    'get/todos',
    async () => {
        const result = await getTodoList();
        return result;
    });

export const registerTodo = createAsyncThunk(
    'register/todos',
    async (todo) => {
        const result = await todoRegister(todo);
        return result;
    });

export const removeTodo = createAsyncThunk(
    'remove/todos',
    async (id) => {
        const result = await todoRemove(id);
        return result;
    });
export const toggleTodo = createAsyncThunk(
    'toggle/todos',
    async (todo) => {
        const result = await todoToggle(todo);
        return result;
    });

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        });
        builder.addCase(registerTodo.fulfilled, (state, action) => {
            state.todos = [...state.todos, action.payload];
        });
        builder.addCase(removeTodo.fulfilled, (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        });
        builder.addCase(toggleTodo.fulfilled, (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.done = !todo.done;
        });
    }
});

export default todosSlice.reducer;

