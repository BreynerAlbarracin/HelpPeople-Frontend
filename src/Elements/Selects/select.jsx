import React from 'react';
import PropTypes from 'prop-types';
import TextValidator from '../../Tools/Validators/TextValidator';

export default function Select({
  registerForm, label, name, options, error,
}) {
  const validateError = () => !!error;

  return (
    <div className="input-container">
      <div>
        <p>{label}</p>
      </div>
      <select {...registerForm(name, {
        validate: (value) => TextValidator(value),
      })}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {validateError() && (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

Select.propTypes = {
  registerForm: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  error: PropTypes.string,
};

Select.defaultProps = {
  error: '',
};
