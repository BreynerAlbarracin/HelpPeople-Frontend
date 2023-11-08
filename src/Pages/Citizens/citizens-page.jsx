import React, { useEffect, useState } from 'react';

import './citizens.css';
import PrimaryButton from '../../Elements/Buttons/primary-button';
import IconButton from '../../Elements/Buttons/icon-button';
import {
  createCitizensApi, deleteCitizensApi, editCitizensApi, getCitizensApi,
} from '../../Apis/citizen.api';
import CitizenModal from '../../Components/Modals/citizen-modal';
import { formatDateUser } from '../../Tools/Dates/format-dates';

export default function CitizensPage() {
  const [citizens, setCitizens] = useState([]);
  const [showModalCitizen, setShowModalCitizen] = useState(false);
  const [citizen, setCitizen] = useState({});

  const getCitizen = () => {
    getCitizensApi()
      .then((citizensData) => {
        setCitizens(citizensData || []);
      });
  };

  const onCreateCitize = (citizenData) => {
    if (!citizenData.id) {
      createCitizensApi(citizenData)
        .then((result) => {
          if (result) {
            getCitizen();
          }
        });
    } else {
      editCitizensApi(citizenData)
        .then((result) => {
          if (result) {
            getCitizen();
          }
        });
    }
  };

  const onEditCitizens = (citizenData) => {
    setCitizen({
      ...citizenData,
      tipoDocumento: citizenData.tipoDocumento.id,
    });

    setShowModalCitizen(true);
  };

  const deleteCitizen = (citizenId) => {
    deleteCitizensApi(citizenId)
      .then((result) => {
        if (result) {
          getCitizen();
        }
      });
  };

  const onShowModalCitizen = () => {
    setShowModalCitizen(true);
  };

  useEffect(() => getCitizen(), []);

  return (
    <div className="citizens-container">
      <CitizenModal
        createCitizen={onCreateCitize}
        showModalCitizen={showModalCitizen}
        setShowModalCitizen={setShowModalCitizen}
        citizen={citizen}
      />
      <div className="header-continer">
        <PrimaryButton type="button" text="CREAR CIUDADANO" action={onShowModalCitizen} />
      </div>
      <div className="table-citizens-container">
        <table>
          <thead>
            <tr>
              <th>Tipo de Documento</th>
              <th>Cédula</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Fecha de Nacimiento</th>
              <th>Profesión</th>
              <th>Aspiración Salarial</th>
              <th>Correo Electrónico</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {citizens?.map((citizenData) => (
              <tr key={citizenData.id}>
                <td>{citizenData.tipoDocumento.tipo}</td>
                <td>{citizenData.cedula}</td>
                <td>{citizenData.nombres}</td>
                <td>{citizenData.apellidos}</td>
                <td>{formatDateUser(citizenData.fechaNacimiento)}</td>
                <td>{citizenData.profesion}</td>
                <td>{citizenData.aspiracionSalarial}</td>
                <td>{citizenData.correoElectronico}</td>
                <td className="citizen-flex">
                  <IconButton nameIcon="edit" action={() => onEditCitizens(citizenData)} />
                  {' '}
                  <IconButton nameIcon="delete" action={() => deleteCitizen(citizenData.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
