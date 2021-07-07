import React from 'react'

export function Currency() {
    return (
        <section className="ml-8 my-9">
            <h1 className="text-xl">Choose a Currency:</h1>
            <div>
                <button className="w-16 rounded-sm shadow-md hover:bg-gray-400 focus:border-gray-100 mr-1 bg-gray-800 text-white">USD</button>
                <button className="w-16 rounded-sm shadow-md hover:bg-gray-400 focus:border-gray-100 mr-1 bg-gray-800 text-white">EUR</button>
                <button className="w-16 rounded-sm shadow-md hover:bg-gray-400 focus:border-gray-100 mr-1 bg-gray-800 text-white">PKR</button>
            </div>
        </section>
    )
}

