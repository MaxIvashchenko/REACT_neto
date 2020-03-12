import React, { useState } from 'react'

export default function Converter() {

    const [color, setColor] = useState("#ffc781");
    const [error, setError] = useState(false)
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
    }
    const handleChange = evt => {
        const value = evt.target.value;

        if (value.length < 6) {
            setError(false)
        }
        else if (value.length === 6) {
            setColor(value)
            setError(false)
        } else {
            setError(true)
        }
    }

    const styleForm = e => {
        let colors = hexToRgb(color);
        if (e) {
            colors = 'red';
        }
        return colors;
    }

    return (
        <>
            <form className="converter" style={{ backgroundColor: styleForm(error) }} >
                <input type='text' onChange={handleChange}></input>
                <div className="rgb">{error ? 'Error' : hexToRgb(color)}</div>
            </form>
        </>
    )
}