import React from 'react'

export default function Panel(props) {
    const { filters, selected, onSelectedFilter } = props;
    return (
        <>
            {filters.map(filter =>
                <button
                    className={filter === selected ? "filter-selected" : "unselected"}
                    onClick={e => onSelectedFilter(filter)}
                    key={filter}
                >{filter}</button>
            )}
        </>
    )
}