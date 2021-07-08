import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

const options = {
    name: 'items',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExists = [...state].find(it => it.id === action.payload.id);
            if (!itemExists) {
                state.push(action.payload)
            }
        },
        toggleQuantity: (state, action) => {
            return state.map(item => {
                if (item.name !== action.payload.name) {
                    return item
                }

                return {
                    ...item,
                    quantity: +action.payload.quantity,
                }
            })

        }
    }
};

export const itemsSlice = createSlice(options);



//Selectors

export const selectItems = (state) => state.items;

export const selectTotal = (state) => {
    if (state.items.length > 0) {
        return state.items.map(item => item.price * item.quantity).reduce((acc, cur) => acc + cur)
    }
};






export const { addToCart, toggleQuantity } = itemsSlice.actions;
export default itemsSlice.reducer;