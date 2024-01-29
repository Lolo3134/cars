import React from 'react';
import s from './contactMain.module.scss';

const ContactMain: React.FC = () => {
  return (
    <section id={s.contact}>
      <div className={s.container}>
        <div className={s.contact__block}>
          <div className={s.contact__block__left}>
            <h1>EASYRIDE</h1>
            <p>Copyright © Easy Ride 2024</p>
          </div>
          <div className={s.contact__block__right}>
            <h1>+1 404-795-82-99</h1>
            <p>easyride@energy-park.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
