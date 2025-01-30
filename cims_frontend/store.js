import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./slice.js";

export const store = configureStore({
  reducer: {
    logged: loggedReducer,
  },
});
