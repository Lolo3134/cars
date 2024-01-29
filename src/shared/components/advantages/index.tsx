import React from 'react';
import s from './advantages.module.scss';
import { Car, Check, Shield } from 'shared/constants/icons';

export const Advantages = () => {
  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <div className={s.badge}>
          <p>our advantages</p>
          <p>EasyRide</p>
        </div>
        <h2 className={s.title}>
          Why Choose Us?
        </h2>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.card__top}>
              <Car/>
              <p>001</p>
            </div>
            <div className={s.card_description}>
              A wide range of vehicles for all needs.
            </div>
          </div>
          <div className={s.card}>
            <div className={s.card__top}>
              <Check />
              <p>002</p>
            </div>
            <div className={s.card_description}>
              Convenient and flexible rental terms.
            </div>
          </div>
          <div className={s.card}>
            <div className={s.card__top}>
              <Shield />
              <p>003</p>
            </div>
            <div className={s.card_description}>
              Transparent pricing and high-quality service.
            </div>
          </div>
        </div>
      </div>
      <div className={s.description}>
        Your Perfect Journey Starts Here Choose your car
        <span> right now and enjoy an unforgettable journey </span>
        through Miami
        <span>. We&apos;re here to </span>
        make your
        <span> rental </span>
        experience
        <span> simple and enjoyable.</span>
      </div>
    </section>
  );
};