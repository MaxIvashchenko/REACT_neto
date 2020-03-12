
import React from 'react'
import PropTypes from 'prop-types'
import shordid from 'shortid'
import { useState } from 'react';


const getRandomNum = (min = 0, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function AccountsHolder(props) {

    const [accounts, setAccounts] = useState([
        { id: 1, name: '**** *231', balance: 19324 }
    ])
    const handleOnClick = () => {
        setAccounts([
            ...accounts,
            {
                id: shordid.generate(),
                name: `**** *${getRandomNum(100, 999)}`,
                balance: getRandomNum(99, 10000)
            }
        ])
    }
    return (
        <>
            <button onClick={handleOnClick}>
                Add account
            </button>
            {props.children(accounts)}

        </>
    )
}

AccountsHolder.protoTypes = {
    children: PropTypes.func.isRequired,
}