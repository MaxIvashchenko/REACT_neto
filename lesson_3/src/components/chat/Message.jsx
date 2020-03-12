import React from 'react'
import PropTypes from 'prop-types'

export default function Message({ from, message }) {

    return (
        <>
            <div class="clearfix">
                <div class="message-data align-right">
                    <span class="message-data-time">{message.time}</span> &nbsp; &nbsp;
                    <span class="message-data-name">{from.name}</span>
                    <i class="fa fa-circle me"></i>
                </div>
                <div class="message other-message float-right">
                    {message.text}
                </div>
            </div>
        </>
    )
}

Message.propTypes = {
    from: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
}