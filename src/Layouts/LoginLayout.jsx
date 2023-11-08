import React from 'react';
import {
  Outlet,
  Navigate,
} from 'react-router-dom';

import useAuth from '../Tools/Hooks/useAuth';

export default function LoginLayout() {
  const [user] = useAuth();

  if (Object.keys(user).length) {
    return <Navigate to="/citizens" />;
  }

  return (
    <div className="login-container">
      <Outlet />
    </div>
  );
}
