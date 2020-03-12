import React from 'react'
import PropTypes from 'prop-types'
import './modal.css'

export default function Modal({text, dangers, isOpen}) {

    const className = dangers ? 'modal danger' : 'modal';

    if (!isOpen) {return null}

    return (
        <>
        <div className={className}>
            {text}
        </div>
        </>
    )
}

Modal.prototype = {
    text: PropTypes.string.isRequired,
    danger: PropTypes.bool,
    isOpen: PropTypes.bool,
}
