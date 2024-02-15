import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../reducers/shopReducer";
import shoppingInfoReducer from "../reducers/shoppingInfoReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        shoppingInfo: shoppingInfoReducer,
        shoppingCart: shoppingCartReducer,
    }
})

export default store;