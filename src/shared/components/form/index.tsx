import React, { FC, useState } from 'react';
import s from './form.module.scss';
import { RegistrationForm } from 'modules/user';
import { AuthForm } from 'modules/user/auth-form';

export const FormAuth:FC = () => {
  const [activeButton, setActiveButton] = useState(2);

  return (
    <section className={s.wrapper}>
      <div className={s.banner}>
        <div className={s.banner__top}>
          <h2 className={s.title}>Welcome to Easy Ride</h2>
          <div className={s.subtitle}>Welcome to Easy Ride - Your Reliable Car Rental Partner in Miami</div>
        </div>
        <div className={s.banner__bottom}>
          <h3 className={s.title}>Easy Ride – is for Freedom</h3>
          <div className={s.subtitle}>Welcome to Easy Ride - Your Reliable Car Rental Partner in Miami</div>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.wrapper}>
          <h1 className={s.title}>EASY<span>RIDE</span></h1>
          <div className={s.buttons}>
            <button className={`${s.auth_button} ${activeButton === 1 && s.auth_button_active}`} onClick={() => setActiveButton(1)}>
              Sign in
            </button>
            <button className={`${s.auth_button} ${activeButton === 2 && s.auth_button_active}`} onClick={() => setActiveButton(2)}>
              Log in
            </button>
          </div>
          {activeButton === 1 &&
            <RegistrationForm />
          }
          {
            activeButton === 2 &&
            <AuthForm />
          }
        </div>
      </div>
    </section>
  );
};