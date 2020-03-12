import React from 'react'
import PropTypes from 'prop-types'

/* Отображает рекламный баннер */
export default function Banner(props) {
  return (
    <img src={props.src} alt={props.alt} style={{marginTop: '20px'}}/>
  )
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}