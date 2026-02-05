import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  // "configureStore" this function is used to create the store, i.e it creates "object" and returns that "object(store)".
  reducer: todoReducer,
});
