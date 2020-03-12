import React from 'react'

export default function List(props) {

    const { array } = props;

    return (
        <>
               
    {array.map((p, i) => <p key={i}>{p.name}</p>)}
        </>
    )

}