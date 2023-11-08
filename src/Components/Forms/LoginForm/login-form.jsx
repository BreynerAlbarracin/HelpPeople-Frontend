import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './login-form.css';
import MailInput from '../../../Elements/Inputs/mail-input';
import PasswordInput from '../../../Elements/Inputs/password-input';
import PrimaryButton from '../../../Elements/Buttons/primary-button';
import { onLoginApi } from '../../../Apis/login.api';
import getSHA512 from '../../../Tools/Cypher/sha-tool';
import useAuth from '../../../Tools/Hooks/useAuth';

export default function LoginForm() {
  const [user, saveUser] = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onLogin = handleSubmit((data) => {
    onLoginApi({
      ...data,
      contrasena: getSHA512(data),
    })
      .then((result) => {
        saveUser({
          ...user,
          ...result,
        });

        navigate('/citizens');
      });
  });

  return (
    <form className="login-form" onSubmit={onLogin}>
      <div className="login-header">
        <h1>Bienvenido a la Bolsa de Empleos</h1>
        <h1>de Help People</h1>
      </div>
      <div className="login-inputs">
        <MailInput label="Correo" name="correo" registerForm={register} error={errors.correo?.message} />
        <PasswordInput label="Contrasena" name="contrasena" registerForm={register} error={errors.contrasena?.message} />
      </div>
      <div className="login-accions">
        <PrimaryButton type="submit" text="ENTRAR" action={onLogin} />
      </div>
    </form>
  );
}
