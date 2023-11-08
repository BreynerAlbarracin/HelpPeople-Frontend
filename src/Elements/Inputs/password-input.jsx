import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './inputs.css';
import IconButton from '../Buttons/icon-button';

export default function PasswordInput({
  label, name, registerForm, error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const validateError = () => !!error;

  const changeVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <div>
        <p>{label}</p>
      </div>
      <div className="password-container">
        <input
          type={showPassword ? 'text' : 'password'}
          {...registerForm(name, {
            required: true,
          })}
        />

        <div className="icon-container">
          <IconButton nameIcon={showPassword ? 'show-pass' : 'hide-pass'} action={changeVisibility} />
        </div>
      </div>
      {validateError() && (
      <div className="error-container">
        <p>{error}</p>
      </div>
      )}
    </div>
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  registerForm: PropTypes.func.isRequired,
  error: PropTypes.string,
};

PasswordInput.defaultProps = {
  error: '',
};
