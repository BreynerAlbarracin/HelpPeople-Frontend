import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import './citizen-form.css';
import PrimaryButton from '../../../Elements/Buttons/primary-button';
import SecondaryButton from '../../../Elements/Buttons/secondary-button';
import TextInput from '../../../Elements/Inputs/text-input';
import MailInput from '../../../Elements/Inputs/mail-input';
import { getListDocumentTypes } from '../../../Apis/lists.api';
import Select from '../../../Elements/Selects/select';
import DateInput from '../../../Elements/Inputs/date-input';

export default function CitizenForm({ createCitizen, cancel, citizen }) {
  const [documentTypes, setDocumentTypes] = useState([]);

  const {
    register, handleSubmit, setValue, getValues, formState: { errors }, reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    createCitizen(data);
  });

  const onCancel = () => {
    reset();
    cancel();
  };

  const determineTextAction = () => (getValues().id ? 'ACTUALIZAR' : 'CREAR');

  useEffect(() => {
    setValue('id', citizen.id);
    setValue('tipoDocumento', citizen.tipoDocumento);
    setValue('cedula', citizen.cedula);
    setValue('nombres', citizen.nombres);
    setValue('apellidos', citizen.apellidos);
    setValue('fechaNacimiento', citizen.fechaNacimiento);
    setValue('profesion', citizen.profesion);
    setValue('aspiracionSalarial', citizen.aspiracionSalarial);
    setValue('correoElectronico', citizen.correoElectronico);

    getListDocumentTypes()
      .then((documentTypesData) => {
        setDocumentTypes(documentTypesData);
      });
  }, [citizen]);

  return (
    <div>
      <div>
        <h2>CREAR CIUDADANO</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="inputs-container">
          <Select label="Tipo Documento" name="tipoDocumento" options={documentTypes} registerForm={register} error={errors.tipoDocumento?.message} />
          <TextInput label="Cédula" name="cedula" registerForm={register} error={errors.cedula?.message} />
          <TextInput label="Nombres" name="nombres" registerForm={register} error={errors.nombres?.message} />
          <TextInput label="Apellidos" name="apellidos" registerForm={register} error={errors.apellidos?.message} />
          <DateInput label="Fecha Nacimiento" name="fechaNacimiento" registerForm={register} error={errors.fechaNacimiento?.message} />
          <TextInput label="Profesión" name="profesion" registerForm={register} error={errors.profesion?.message} />
          <TextInput label="Aspiracion Salarial" name="aspiracionSalarial" registerForm={register} error={errors.aspiracionSalarial?.message} />
          <MailInput label="Correo Electrónico" name="correoElectronico" registerForm={register} error={errors.correoElectronico?.message} />
        </div>
        <div className="actions-container">
          <SecondaryButton type="button" text="CERRAR" action={onCancel} />
          <PrimaryButton type="submit" text={`${determineTextAction()} CIUDADANO`} action={() => {}} />
        </div>
      </form>
    </div>
  );
}

CitizenForm.propTypes = {
  createCitizen: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
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

CitizenForm.defaultProps = {
  citizen: {},
};
