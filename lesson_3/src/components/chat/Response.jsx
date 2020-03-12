import React from 'react'
import PropTypes from 'prop-types'

export default function Response({ from, message }) {

    return (
        <>
            <div>
                <div class="message-data">
                    <span class="message-data-name"><i class="fa fa-circle online"></i>{from.name}</span>
                    <span class="message-data-time">{message.time}</span>
                </div>
                <div class="message my-message">
                    {message.text}
                </div>
            </div>
        </>
    )
}

Response.propTypes = {
    from: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
}