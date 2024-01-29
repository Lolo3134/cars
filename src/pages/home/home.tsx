import React from 'react';
import { HomeHeader } from 'shared/components/home-header';
import { Advantages } from 'shared/components/advantages';
import Catalog from 'shared/components/carCatalog';
import InfoMain from 'shared/components/infoMain';
import ContactMain from 'shared/components/contactMain';
import Footer from 'shared/components/footer';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Advantages />
      <Catalog />
      <InfoMain />
      <ContactMain />
      <Footer />
    </>
  );
};

export default Home;