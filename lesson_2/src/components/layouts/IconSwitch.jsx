import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch(props) {
  const {icon, onSwitch} = props;

  return (
    <button className="material-icons" onClick={onSwitch}><i>{icon}</i></button>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
}

export default IconSwitch
