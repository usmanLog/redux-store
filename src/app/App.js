import React from 'react'
import { Cart } from '../features/cart/Cart';
import { Items } from '../features/items/Items';
import { data } from '../data'

function App() {
    return (
        <div className="w-full h-full text-center">
            <h1 className="text-6xl text-purple-600">Redux Store</h1>
            <Items data={data} />
            <Cart />
        </div>
    )
}

export default App
