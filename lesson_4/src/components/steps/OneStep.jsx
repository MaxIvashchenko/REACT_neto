import React from 'react'
// import PropTypes from 'prop-types'




export default function OneStep({ listItems, handleRemove }) {

    const formatDate = (myDate) => {
        const day = myDate.slice(0, 2);
        const month = myDate.slice(3, 5) - 1;
        const year = myDate.slice(6);
        return new Date(year, month, day); 
    }

    const sortedItems = listItems.sort((a, b) => {
        const dateA = formatDate(a.date);
        const dateB = formatDate(b.date);
        return  dateB > dateA ? 1 : -1;
    })


    const item = sortedItems.map(item => {

        return (
            <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.passed}</td>
                <td><button onClick={() => handleRemove(item.id)} type="submit">✘</button></td>
            </tr>
        )
    })



    return (
        <>
            {item}
        </>
    )
}