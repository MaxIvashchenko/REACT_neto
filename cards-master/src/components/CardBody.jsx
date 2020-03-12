import React from 'react';
import PropTypes from 'prop-types';

function CardBody(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href={props.url} className="btn btn-primary">{props.btnText}</a>
    </div>
  )
}

CardBody.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  btnText: PropTypes.string
}

export default CardBody

