import React from 'react';
import '../App.css';
export default function LikeButton(props) {
    let clicks = 0;
    const handleClick = evt => {
        console.log(evt, clicks);
        clicks++;
    }
    return (
        <>
        <button
            onClick={evt => handleClick(evt)}
        >Click me: {clicks}</button>
        

        </>
    );
}