import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
    name: 'counter',
    initialState: {
        products: [],
        isFetching: false
    },
    reducers: {
        setProducts(state, action) {
            return {...state, products: [...action.payload]}
        },
        toggleIsFetching(state, action) {
            return {...state, isFetching: action.payload}
        }
    },
})

export const {setProducts, toggleIsFetching} = shopSlice.actions;
export default shopSlice.reducer;