import React from 'react'
import { Cart } from '../features/cart/Cart';
import { Currency } from '../features/currency/Currency';
import { Items } from '../features/items/Items';
import { data } from '../data'

function App() {
    return (
        <div className=" w-full">
            <Currency />
            <Items data={data} />
            <Cart />
        </div>
    )
}

export default App
