import { createSlice } from '@reduxjs/toolkit'

const shoppingInfoSlice = createSlice({
    name: 'shoppingInfo',
    initialState: {
        product: {},
        isFetching: false
    },
    reducers: {
        setProduct(state, action) {
            return {...state, product: {...action.payload}};
        },
        toggleIsFetching(state, x) {
            return {...state, isFetching: x.payload}
        }
    },
})

export const {setProduct, toggleIsFetching} = shoppingInfoSlice.actions;
export default shoppingInfoSlice.reducer