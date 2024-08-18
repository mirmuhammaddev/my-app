import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        count: 0,
        products: [],
        isLoading: false,
        cart: []
    },
    reducers: {
        increment: (state, action) => {
            const foundProduct = state.cart.find(product => product.id === action.payload);
            state.cart = [...state.cart.filter(product => product.id !== foundProduct.id)];
            state.cart = [...state.cart, {...foundProduct, count: foundProduct.count + 1}];
        },
        decrement: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.count -= 1
            }
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
        getProductsSuccess: (state, action) => {
            state.products = action.payload;
            state.isLoading = false
        },
        getProductsFailure: (state) => {
            state.isLoading = true
        },
        getProductsFetch: (state, action) => {

        },
        postAdded: (state, action) => {
            const foundProduct = state.products.find(product => product.id === action.payload);
            const existingProduct = state.cart.findIndex(product => product.id === foundProduct.id);
            if (existingProduct === -1) {
                state.cart = [...state.cart, {...foundProduct, count: 1}]
            }
        },
        postDelete: (state, action) => {
            state.cart = [...state.cart.filter(product => product.id !== action.payload)];
        },
    }
});

export const {increment, decrement, incrementByAmount, getProductsSuccess, postAdded, postDelete, getProductsFailure, getProductsFetch} = productSlice.actions;

export default productSlice.reducer;