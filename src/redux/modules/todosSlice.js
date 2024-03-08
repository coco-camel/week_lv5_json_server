import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
    ],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        insertTodo: (state, action) => {
            state.todos.push(
                ...action.payload
            );
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.done = !todo.done;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        replaceTodo: (state, action) => {
            state.todos = action.payload;
        },
    },
});

export const { insertTodo, toggleTodo, removeTodo, replaceTodo } = todosSlice.actions;

export default todosSlice.reducer;
