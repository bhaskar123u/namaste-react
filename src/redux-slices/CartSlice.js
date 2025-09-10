import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: []
    },
    reducers: {
        // reducer functions to mutate the states
        addItem: (state, action) => {
            console.log('state', state);
            console.log('action', action);
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            // for simplicity we are just removing the last item
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;

// when we click on button -> it dispatches an action [addItem: (state, action)] -> which calls a reducer function(associated arrow function for modifying the slice of the store)