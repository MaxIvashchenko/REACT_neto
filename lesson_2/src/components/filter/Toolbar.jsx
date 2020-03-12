import React from 'react'

export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
    return (
        <>
            {filters.map(o =>
                <button className={o === selected ? "filter-selected" : "unselected"} onClick={e => onSelectFilter(o)} key={o}>{o}</button>
            )}
            
        </>
    );
}