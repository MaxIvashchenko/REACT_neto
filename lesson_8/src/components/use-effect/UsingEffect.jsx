import React from 'react'
import List from './List'
import Details from './Details'
import { useState } from 'react'
import { useEffect } from 'react';
// import {users} from './data/users'



export default function UsingEffect() {

    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState(null);

    const handleClick = (e) => {
        setSelected(e)
    }
    useEffect(() => {
        fetch(process.env.REACT_APP_ITEMS_URL)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <>

            <List items={items} handleClick={handleClick} selected={selected} />
            {selected && <Details info={selected} />}
        </>
    )
}