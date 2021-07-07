import React from 'react'
import { useSelector } from 'react-redux';
import { selectTotal } from '../items/itemsSlice';
import { selectItems } from '../items/itemsSlice';
import { CartItem } from '../../components/CartItem';

export function Cart() {

    const total = useSelector(selectTotal);
    const items = useSelector(selectItems)


    return (
        <nav className="sticky bottom-0 w-full mb-0 max-h-80 bg-gray-200">
            <ul className="list-none w-full flex flex-col">
                {items.map((item, idx) => {
                    return (
                        <CartItem
                            key={idx}
                            item={item}
                        />
                    )
                })}
                <li className="flex justify-between flex-row w-full">
                    <span className="text-3xl font-bold mx-6 my-6">Total</span>
                    <span className="text-3xl mx-6 my-6 font-bold text-red-700">{`$${total ? total : 0.00} USD`}</span>
                </li>
            </ul>
        </nav>
    )
}

