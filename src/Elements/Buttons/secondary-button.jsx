import React from 'react';
import PropTypes from 'prop-types';

import './buttons.css';

export default function SecondaryButton({ type, text, action }) {
  return (
    <button className="secondary-button" type={type === 'button' ? 'button' : 'submit'} onClick={action}>
      {text}
    </button>
  );
}

SecondaryButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
