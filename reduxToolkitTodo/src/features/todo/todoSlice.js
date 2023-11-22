import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({    //slice : reducer ka bara version h almost and reducer is a kind of functionality
    name: 'todo',
    initialState,
    reducers: {                 //reducers object h jisme aati h properties aur functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },

        removeTodo: (state, action) => { // state has current state & action has the data i.e. being passed
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))

        }
    },
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer