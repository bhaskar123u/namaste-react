import { createSlice, current } from "@reduxjs/toolkit";

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
            state.items.push(action.payload); // In redux toolkit
            // This state change used to be prohibited in Vanilla Redux, we had to mutate a copy of the state.
        },
        removeItem: (state) => {
            // for simplicity we are just removing the last item
            state.items.pop();
        },
        clearCart: (state) => {
            // this state is a local variable, not the global one
            console.log(current(state)); // this way we can console.log
            state.items.length = 0; // OR return []; - RTK says either mutate the state or return new state
        }
    }
});
// console.log('CartSlice.js', CartSlice);
/*
CartSlice.js {
  "name": "Cart",
  "actions": {}, -> all reducers functions are added here
  "caseReducers": {},
  "reducerPath": "Cart",
  "selectors": {}
}
*/
export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;

/* when we click on button -> it dispatches an action [addItem: (state, action)] -> which calls a reducer function(associated arrow function for modifying the slice of the store)

Q) Why do we have 2 exports here?
1. If you defined a reducer addItem(state, action), then cartSlice.actions.addItem is a ready-made function that creates { type: "cart/addItem", payload: ... }.
2. The slice also gives you the reducer function. That reducer must go into your Redux store.

So, Action creators → for dispatching changes(components).
Reducer → for handling those actions inside the store.

They’re two sides of the same coin:
One is “how you ask for a change” (action creators).
One is “how the state responds to the change” (reducer).
*/