import React from 'react'

export function CartItem({ item }) {
    return (
        <li>
            <h2>{item.name}</h2>
            <span>{item.price}</span>
        </li>
    )
}

