import React from 'react';
import s from './home-header.module.scss';
import { Title } from './components/title';
import { Link } from 'react-router-dom';
import { Arrow } from 'shared/constants/icons';

export const HomeHeader = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.badge}>
        Welcome to Easy Ride - Your Reliable Car Rental Partner in Miami
        </div>
        <h1 className={s.title}>
          <Title />
        </h1>
        <div className={s.description}>
          <img src={'/description_car.webp'} alt={'car'}/>
          <div>Explore the beauty and dynamism of Miami with utmost comfort.
            Our fleet combines style, comfort, and quality, offering the perfect choice for every traveler.
            From sunny beaches to exquisite restaurants - travel with pleasure.
          </div>
          <Link to={'/catalog'} className={s.link}>
            <Arrow />
            Book you car
          </Link>
        </div>
        <div className={s.brands}>
          {window.innerWidth > 768 && (
            <img src={'/Kia.png'} alt={'Kia'}/>
          )}
          <img src={'/BMW.png'} alt={'BMW'}/>
          <img src={'/Ford.png'} alt={'Ford'}/>
          <img src={'/Mazda.png'} alt={'Mazda'}/>
          <img src={'/Lexus.png'} alt={'Lexus'}/>
          <img src={'/Audi.png'} alt={'Audi'}/>
          <img src={'/MercedesBenz.png'} alt={'MercedesBenz'}/>
        </div>
      </div>
    </div>
  );
};