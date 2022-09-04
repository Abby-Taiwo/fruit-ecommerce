import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./src/Features/counter/counterSlice";

export const store = configureStore({
    reducer: {
       counter: counterReducer
    }
})