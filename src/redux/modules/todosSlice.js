import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [

    ],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        insertTodo: (state, action) => {
            state.todos.push({
                id: uuidv4(),
                title: action.payload.title,
                contents: action.payload.contents,
                done: false,
            });
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
    },
});

export const { insertTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
