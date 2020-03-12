import React from 'react'
import PropTypes from 'prop-types'
import Typing from './Typing'
import Message from './Message'
import Response from './Response'
import './main.css'

export default function Listing({ messages }) {


  const list =   messages.map( message => (
        <>
            {message.type === 'message' && <Message from={message.from} message={message} />}
            {message.type === 'response' && <Response from={message.from} message={message} />}
            {message.type === 'typing' && <Typing from={message.from} message={message} />}  
        </>
    ))

    return (
        <>
            <div>
                {list}
            </div>
        </>
    )
}

Listing.defaultProps = {
    messages: []
}

Listing.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired
}