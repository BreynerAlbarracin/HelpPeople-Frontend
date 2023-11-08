import React from 'react';
import PropTypes from 'prop-types';

import './buttons.css';

export default function PrimaryButton({ type, text, action }) {
  return (
    <button className="primary-button" type={type === 'button' ? 'button' : 'submit'} onClick={action}>
      {text}
    </button>
  );
}

PrimaryButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
