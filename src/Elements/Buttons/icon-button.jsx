import React from 'react';
import PropTypes from 'prop-types';

import './buttons.css';
import ManagerIcon from '../Managers/Icon';

export default function IconButton({
  nameIcon, action, isDisabled,
}) {
  return (
    <button
      className="icon-button"
      type="button"
      disabled={isDisabled}
      onClick={action}
    >
      {' '}
      <ManagerIcon name={nameIcon} />
    </button>
  );
}

IconButton.defaultProps = {
  isDisabled: false,
};

IconButton.propTypes = {
  nameIcon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};
