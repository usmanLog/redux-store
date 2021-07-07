import React from 'react';
import { Item } from '../../components/Item';



export function Items({ data }) {





    return (

        <main className="mx-12 my-9 w-11/12">
            <ul className="flex flex-row w-full justify-between">
                {
                    data.map(item => {
                        return (
                            <Item
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </ul>
        </main>
    )
}

