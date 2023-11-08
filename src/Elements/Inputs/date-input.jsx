import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import './inputs.css';
import TextValidator from '../../Tools/Validators/TextValidator';
import { formatDateSystem } from '../../Tools/Dates/format-dates';

export default function DateInput({
  name, label, registerForm, error,
}) {
  const maxDate = formatDateSystem(dayjs().toString());

  const validateError = () => !!error;

  return (
    <div className="input-container">
      <div>
        <p>{label}</p>
      </div>
      <input
        type="date"
        lang="es-ES"
        max={maxDate}
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

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  registerForm: PropTypes.func.isRequired,
  error: PropTypes.string,
};

DateInput.defaultProps = {
  error: '',
};
