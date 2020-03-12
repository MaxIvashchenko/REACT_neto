import React from 'react'
import PropTypes from 'prop-types'

export default function Image(props) {
  return (
    <img src={props.src} className="card-img-top" alt={props.alt} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

