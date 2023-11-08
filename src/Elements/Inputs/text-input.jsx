import React from 'react';
import PropTypes from 'prop-types';

import './inputs.css';
import TextValidator from '../../Tools/Validators/TextValidator';

export default function TextInput({
  name, label, registerForm, error,
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
          validate: (value) => TextValidator(value),
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

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  registerForm: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: '',
};
