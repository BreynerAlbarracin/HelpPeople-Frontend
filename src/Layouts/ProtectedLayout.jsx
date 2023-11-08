import React from 'react';
import {
  Navigate, Outlet,
  Link,
} from 'react-router-dom';

import useAuth from '../Tools/Hooks/useAuth';
import SecondaryButton from '../Elements/Buttons/secondary-button';

export default function ProtectedLayout() {
  const [user, saveUser] = useAuth();

  if (!Object.keys(user).length) {
    return <Navigate to="/" />;
  }

  const logOut = () => {
    saveUser({});
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1>
          Bienvenido
          {' '}
          {user.nombreCompleto}
        </h1>
        <SecondaryButton type="button" text="Salir" action={logOut} />
      </div>
      <div className="page-container">
        <div className="nav-container">
          <nav>
            <ul>
              <li>
                <Link to="/citizens">Ciudadanos</Link>
              </li>
              <li>
                <Link to="/vacancies">Vacantes</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="body-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
