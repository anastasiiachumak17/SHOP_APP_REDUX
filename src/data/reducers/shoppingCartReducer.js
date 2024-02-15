import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        productsInCart: [],
        totalQuantity: 0,
        reviewForOrder: '',
        error: null,
    },
    reducers:{
        addProductToCart(state, action) {
            const { id } = action.payload;
            const productExists = state.productsInCart.some(product => {
                if (product.id === id) {
                    product.counter++;
                    return true;
                }
                return false;
            });

            if (!productExists) {
                state.productsInCart.push({ ...action.payload, counter: 1 });
            }
        },
        removeProductFromCart(state, action) {
            const { id } = action.payload;
            state.productsInCart = state.productsInCart.filter(productInCart => productInCart.id !== id);
        },
    setCount(state, action) {
            const { id } = action.payload;
            const product = state.productsInCart.find(el => el.id === id);
            if (product) {
                product.counter++;
                state.totalQuantity++;
            }
        },
        setReview(state, action) {
            state.reviewForOrder = action.payload;
        },
        submitOrder(state, action) {
            if (state.productsInCart.length > 0) {
                axios.post('http://localhost:3000/products', {
                    productsInCart: state.productsInCart,
                    reviewForOrder: state.reviewForOrder
                })
                    .then(response => {
                        // handle success if needed
                    })
                    .catch(error => {
                        // handle error if needed
                    });
            } else {
                state.error = 'Empty cart';
            }
        },
    },
});

export const { addProductToCart, removeProductFromCart, setCount, setReview, submitOrder } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
