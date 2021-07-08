import React from 'react';
import { toggleQuantity } from '../features/items/itemsSlice';
import { useDispatch } from 'react-redux';

export function CartItem({ item }) {

    const dispatch = useDispatch();


    const handleChange = ({ target }) => {
        dispatch(toggleQuantity({
            name: item.name,
            quantity: target.value,
        }))
    }

    return (
        <li className="flex justify-between flex-row w-full">
            <h2 className="ml-7">{item.name}</h2>
            <select onChange={handleChange} className="mr-14 w-16" defaultValue="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </li>
    )
}

