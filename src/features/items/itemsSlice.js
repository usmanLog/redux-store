import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

const options = {
    name: 'items',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            return [...state, action.payload]
        }
    }
};

export const itemsSlice = createSlice(options);



//Selectors

export const selectItems = (state) => state.items;

export const selectTotal = (state) => {
    if (state.items.length > 0) {
        return state.items.map(item => item.price).reduce((acc, cur) => acc + cur)
    }
};






export const { addToCart } = itemsSlice.actions;
export default itemsSlice.reducer;