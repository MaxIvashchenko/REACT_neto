import React from 'react'
import PropTypes from 'prop-types'

export default function Typing({ from, message }) {

    return (
        <>
            <div className="message-data">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            ...
        </>
    )
}

Typing.propTypes = {
    from: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
}