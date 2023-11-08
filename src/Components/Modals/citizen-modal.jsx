import React from 'react';
import PropTypes from 'prop-types';

import './citizen-modal.css';
import CitizenForm from '../Forms/CitizenForm/citizen-form';

export default function CitizenModal({
  createCitizen, showModalCitizen, setShowModalCitizen, citizen,
}) {
  const closeModal = () => {
    setShowModalCitizen(false);
  };

  return (
    <div className={showModalCitizen ? 'modal show-modal' : 'modal hide-modal'}>
      <div className="modal-form">
        <CitizenForm
          createCitizen={createCitizen}
          cancel={closeModal}
          citizen={citizen}
        />
      </div>
    </div>
  );
}

CitizenModal.propTypes = {
  createCitizen: PropTypes.func.isRequired,
  showModalCitizen: PropTypes.bool.isRequired,
  setShowModalCitizen: PropTypes.func.isRequired,
  citizen: PropTypes.shape({
    id: PropTypes.string,
    tipoDocumento: PropTypes.string,
    cedula: PropTypes.string,
    nombres: PropTypes.string,
    apellidos: PropTypes.string,
    fechaNacimiento: PropTypes.string,
    profesion: PropTypes.string,
    aspiracionSalarial: PropTypes.string,
    correoElectronico: PropTypes.string,
  }),
};

CitizenModal.defaultProps = {
  citizen: {},
};
