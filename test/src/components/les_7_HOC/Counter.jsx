import React from 'react'

export default function Counter(props) {

    const { value, decOne, addOne } = props;

    return (
        <>
            <button onClick={decOne}>-</button>
            <span>{value}</span>
            <button onClick={addOne}>+</button>
        </>
    )
}

