import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

export default function Stars({ count }) {
    if (count < 1 || count > 5) return null
    const items = [];
    for (let i = 0; i < count; i++) {
        items.push(
            <li key={i}>
                <Star />
            </li>
        )
    }

    return (
        <>
            {count}
            <ul className="card-body-stars u-clearfix">
                {items}
            </ul>
        </>
    )
}

Stars.defaultProps = {
    count: 0,
}

Stars.propTypes = {
    count: PropTypes.number.isRequired
}