import React from 'react';
import PropTypes from 'prop-types';

/* Заготовка для пункта списка */
export default function ListItem(props) {
  return (
    <li className={props.className}>
      {props.children}
    </li>
  )
}

ListItem.propTypes = {
  className: PropTypes.string
}

