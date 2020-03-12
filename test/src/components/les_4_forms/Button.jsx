import React from 'react'
import { useState } from 'react'
import './button.css'

export default function Button() {
    const [state, setState] = useState('10');

    const handleClick = () => {
        setState(prevNum => prevNum + 1)
    }
    const onRemove = () => {
        setState(prevNum => prevNum - 1)
    }

    return (
        <div >
            <input ></input>
            <button className='button' onClick={handleClick}>Click me</button>
            <button className='button' onClick={onRemove}>Remove me</button>

            <p>{state}</p>
        </div>
    )

}