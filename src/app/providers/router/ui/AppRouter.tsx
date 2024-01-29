import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/constants';
import { HomeAsync } from 'pages/home/home.async';
import { Header } from 'shared/components';

export const AppRouter = () => {
  return (
    <Suspense fallback={'...Загрузка'}>
      <Header />
      <Routes>
        <Route path={routes.home} element={<HomeAsync/>}/>
      </Routes>
    </Suspense>
  );
};