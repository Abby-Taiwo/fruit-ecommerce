import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    price: 0,
    quantity: 0,
}

export const mobilizeCart = createSlice({
    name: " mobilizeCart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity +=  action.payload
            state.price *=  action.payload
        },
        removeProduct: (state, action) => {
            state.quantity -=  action.payload
            state.price /=  action.payload
        }
    }
})

export const {addProduct,removeProduct} = mobilizeCart.actions
export default mobilizeCart.reducer