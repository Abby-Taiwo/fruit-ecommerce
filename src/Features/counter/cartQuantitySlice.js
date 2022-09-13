import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const cartQuantitySlice = createSlice({
    name: "cartQuantity",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value >= 1) 
                state.value -= 1
        }
    }
});

export const {
    increment,
    decrement
} = cartQuantitySlice.actions;

export default cartQuantitySlice.reducer