import React from 'react'
import PropTypes from 'prop-types'

/* Отдельная новость вверху страницы */
export default function MainNew({...props}) {
  return (
    <article style={{display: "flex", flexDirection: "column", width: "30%"}}>
      <img src={props.img} alt={props.alt} style={{width: "100px", height: "100px", borderRadius: "50%"}} />
      <a href={props.link}>{props.title}</a>
      <span>{props.text}</span>
    </article>
  )
}

MainNew.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

