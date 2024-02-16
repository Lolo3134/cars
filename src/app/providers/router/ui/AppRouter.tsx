import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/constants';
import { Header } from 'shared/components';
import { HomeAsync } from 'pages';
import { AuthAsync } from 'pages/auth/auth.async';
import { CatalogAsync } from 'pages/catalog/catalog.async';
import { CarDetailsPage } from 'pages/carDetailsPage/carDetailsPage.async';

export const AppRouter = () => {
  return (
    <Suspense fallback={'...Загрузка'}>
      <Header />
      <Routes>
        <Route path={routes.home} element={<HomeAsync/>}/>
        <Route path={routes.carPage} element={<CarDetailsPage/>}/>
        <Route path={routes.catalog} element={<CatalogAsync/>}/>
        <Route path={routes.auth} element={<AuthAsync />}/>
      </Routes>
    </Suspense>
  );
};