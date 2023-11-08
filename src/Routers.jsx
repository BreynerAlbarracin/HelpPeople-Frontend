import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import LoginPage from './Pages/Login/login-page';
import CitizensPage from './Pages/Citizens/citizens-page';
import VacanciesPage from './Pages/Vacancies/vacancies-page';
import LoginLayout from './Layouts/LoginLayout';
import ProtectedLayout from './Layouts/ProtectedLayout';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/citizens" element={<CitizensPage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
