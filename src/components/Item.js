import React from 'react';
import { addToCart } from '../features/items/itemsSlice';
import { useDispatch } from 'react-redux';

export function Item({ item }) {

    const dispatch = useDispatch();

    const handleClick = () => {
        if (item) {
            dispatch(addToCart(item));
        }
    }




    return (
        <li className="w-60 h-auto flex flex-col items-center">
            <img className="h-60 border border-solid  border-purple-500 w-60 rounded-2xl" src={item.path} alt={item.name} />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="font-bold text-2xl text-purple-700">{`$${item.price}`}</p>
            <button onClick={handleClick} className="my-2 bg-gray-700 text-white w-24 h-8 hover:bg-gray-300 shadow-lg hover:text-gray-800 rounded-sm">Add to Cart</button>

        </li>
    )



}

