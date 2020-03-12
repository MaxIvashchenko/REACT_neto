import React from 'react'


export default function  Filter(props){


    const handleFilter = (evt) => {
        const {value} = evt.target;
        props.onFilter(value);
     }

    return (
        <>
            <input type="search" value={props.filter} onChange={handleFilter} />
        </>
    );
}