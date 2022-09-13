import { configureStore } from "@reduxjs/toolkit";
import cartQuantityReducer from "./Features/counter/cartQuantitySlice";

export const store = configureStore({
    reducer: {
        cartQuantityCounter: cartQuantityReducer
    }
})