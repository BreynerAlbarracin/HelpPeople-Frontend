import React from 'react';
import PropTypes from 'prop-types';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import {
  FaRegFloppyDisk, FaPencil, FaTrash, FaCheck, FaXmark,
} from 'react-icons/fa6';

export default function ManagerIcon({ name }) {
  const determinateIcon = () => {
    switch (name) {
      case 'hide-pass':
        return <GoEyeClosed />;
      case 'show-pass':
        return <GoEye />;
      case 'save':
        return <FaRegFloppyDisk />;
      case 'edit':
        return <FaPencil />;
      case 'delete':
        return <FaTrash />;
      case 'check':
        return <FaCheck />;
      case 'uncheck':
        return <FaXmark />;
      default:
        return <div />;
    }
  };

  return (
    <>
      {determinateIcon()}
    </>
  );
}

ManagerIcon.propTypes = {
  name: PropTypes.string.isRequired,
};
