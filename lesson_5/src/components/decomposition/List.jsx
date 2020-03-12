import React from 'react';
import PropTypes from 'prop-types';

/* Выводит список, переданный в родителе */
export default function List(props) {

  return (
    <ul className={props.className}>
      {props.children}
    </ul>
  )
}

List.propTypes = {
  className: PropTypes.string
}

