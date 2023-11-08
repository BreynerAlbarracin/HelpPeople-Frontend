import React from 'react';
import PropTypes from 'prop-types';

import './inputs.css';
import MailValidator from '../../Tools/Validators/MailValidator';

export default function MailInput({
  label, name, registerForm, error,
}) {
  const validateError = () => !!error;

  return (
    <div className="input-container">
      <div>
        <p>{label}</p>
      </div>
      <input
        type="text"
        {...registerForm(name, {
          required: true,
          validate: (value) => MailValidator(value),
        })}
      />
      {validateError() && (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

MailInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  registerForm: PropTypes.func.isRequired,
  error: PropTypes.string,
};

MailInput.defaultProps = {
  error: '',
};
