import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        updateProductQuantity: (state, action) => {
            const { index, newQuantity } = action.payload;

            state.products[index].quantity = newQuantity;
            state.total = state.products.reduce((total, product) => {
                return total + product.price * product.quantity;
            }, 0);
        },
        removeProduct: (state, action) => {
            const { index } = action.payload;

            state.products.splice(index, 1);
            state.quantity -= 1;
            state.total = state.products.reduce((total, product) => {
                return total + product.price * product.quantity;
            }, 0);
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addProduct, updateProductQuantity, removeProduct, reset } =
    cartSlice.actions;
export default cartSlice.reducer;
