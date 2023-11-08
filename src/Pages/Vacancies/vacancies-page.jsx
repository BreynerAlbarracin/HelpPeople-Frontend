import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import './vacancies.css';
import { assignVacantApi, getVacanciesApi } from '../../Apis/vacant-api';
import { getListCitizen } from '../../Apis/lists.api';
import ManagerIcon from '../../Elements/Managers/Icon';

export default function VacanciesPage() {
  const [vacancies, setVacancies] = useState([]);
  const [citizens, setCitizens] = useState([]);

  const loadVacancies = () => getVacanciesApi()
    .then((vacanciesData) => {
      setVacancies(vacanciesData);
    });

  const loadCitizen = () => getListCitizen()
    .then((citizensData) => {
      setCitizens(citizensData);
    });

  const assignVacant = (citizenId, vacantId) => {
    const citizen = citizens.find((f) => f.value === citizenId);
    const vacant = vacancies.find((f) => f.codigo === vacantId);

    if (citizen && vacant) {
      Swal.fire({
        title: `Esta seguro que desea asignar a ${citizen.label} la vacante ${vacant.codigo}?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'ASIGNAR',
        denyButtonText: 'NO ASIGNAR',
      }).then((result) => {
        if (result.isConfirmed) {
          assignVacantApi({
            ciudadanoId: citizen.value,
            vacanteId: vacant.id,
          }).then(() => Promise.all([
            loadVacancies(),
            loadCitizen(),
          ]));
        }
      });
    }
  };

  useEffect(() => {
    Promise.all([
      loadVacancies(),
      loadCitizen(),
    ]);
  }, []);

  return (
    <div className="vacancies-container">
      <div className="vacancies-header">
        <h2>VACANTES</h2>
      </div>
      <div className="table-vacancies-container">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Cargo</th>
              <th>Descripción</th>
              <th>Empresa</th>
              <th>Salario</th>
              <th>Disponibilidad</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {vacancies.map((vacant) => (
              <tr key={vacant.id}>
                <td>{vacant.codigo}</td>
                <td>{vacant.cargo}</td>
                <td>{vacant.descripcion}</td>
                <td>{vacant.empresa}</td>
                <td>{vacant.salario}</td>
                <td>
                  {vacant.disponibilidad
                    ? <ManagerIcon name="check" /> : <ManagerIcon name="uncheck" />}
                </td>
                <td>
                  {vacant.disponibilidad && (
                  <select onChange={({ target }) => assignVacant(target.value, vacant.codigo)}>
                    <option value="">Ciudadano</option>
                    {citizens.map((citizen) => (
                      <option value={citizen.value}>{citizen.label}</option>
                    ))}
                  </select>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
