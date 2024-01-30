import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/constants';
import { Header } from 'shared/components';
import { HomeAsync, RegistrationAsynk } from 'pages';

export const AppRouter = () => {
  return (
    <Suspense fallback={'...Загрузка'}>
      <Header />
      <Routes>
        <Route path={routes.home} element={<HomeAsync/>}/>
        <Route path={routes.registration} element={<RegistrationAsynk />} />
      </Routes>
    </Suspense>
  );
};