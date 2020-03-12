import React from 'react'

export default function List({ items, selected, handleClick }) {

    return (
        <>
            <ul>
                {items.map(o => <li className={selected ? (selected.id === o.id ? "listItem active" : "listItem") : "listItem"} key={o.id}
                    onClick={() => handleClick(o)}>{o.name}</li>)}
            </ul>
        </>
    )
}