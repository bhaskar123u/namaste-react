import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../redux-slices/CartSlice";

const AppStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default AppStore;

// reducer is apps big reducer and it consists of small reducers from each slice