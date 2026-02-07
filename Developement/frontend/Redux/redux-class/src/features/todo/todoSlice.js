// reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // we created this sample "initial state".
  todos: [{ id: nanoid(), task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  // creation of slice(reducer logic + action).
  name: "todo",
  initialState,
  reducers: {
    // state,action
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload, // when we specify task of our app "assume action object is created (as redux-toolkit creates it)"
        isDone: false,
      };
      state.todos.push(newTodo); // direct mutation of array is possible using Redux Toolkit, but in react we used to "destructure".
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload); //"payload consist of the id of individual tasks"
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) =>// as we use "map()" its compulsory to spread array or object.
        todo.id === action.payload ? { ...todo, isDone: true } : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions; // telling redux-toolkit to create "action object" for the following
export default todoSlice.reducer; // so that we can use individual reducers which is needed.
