import React, { useState } from 'react';
import ContextCrud from './context.js'

export default function ContProvider(props) {
    const [change, setChange] = useState(0);
    const [changePost, setChangePost] = useState(false);

    return (
        <ContextCrud.Provider value={{ change, changePost, setChange, setChangePost }}>
            {props.children}
        </ContextCrud.Provider>
    )
}
