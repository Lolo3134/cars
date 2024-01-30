import React, { FC } from 'react';
import s from './mobile-nav.module.scss';
import { Link } from 'react-router-dom';
import { Instagram, Telegram, Twitter, WhatsApp } from 'shared/constants';
import { MobileProps } from 'shared/components/navbar/navbar.types';

export const MobileNav:FC<MobileProps> = ({ setIsOpen }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <nav>
          <Link to={'/'} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to={'/catalog'} onClick={() => setIsOpen(false)}>Car catalog</Link>
          <Link to={'/registration'} onClick={() => setIsOpen(false)}>Login in</Link>
        </nav>
        <div className={s.contacts}>
          <div className={s.contacts_direct}>
            <a href={'tel:+14047958299'} className={s.phone}>+1 404-795-82-99</a>
            <a href={'mailto:easyride@energy-park.com'}>easyride@energy-park.com</a>
          </div>
          <div className={s.contacts_social}>
            <div className={s.cards}>
              <Link className={s.card} to={'https://www.instagram.com'} target={'_blank'} onClick={() => setIsOpen(false)}>
                <Instagram />
                <div className={s.card_title}>
                  <img src={'/arrow-footer.svg'} alt={'go to Instagram'}/>
                  <p className={s.title}>Instagram</p>
                </div>
              </Link>
              <Link className={s.card} to={'https://telegram.org/'} target={'_blank'} onClick={() => setIsOpen(false)}>
                <Telegram />
                <div className={s.card_title}>
                  <img src={'/arrow-footer.svg'} alt={'go to Telegram'}/>
                  <p className={s.title}>Telegram</p>
                </div>
              </Link>
              <Link className={s.card} to={'https://whatsapp.com'} target={'_blank'} onClick={() => setIsOpen(false)}>
                <WhatsApp />
                <div className={s.card_title}>
                  <img src={'/arrow-footer.svg'} alt={'go to WhatsApp'}/>
                  <p className={s.title}>WhatsApp</p>
                </div>
              </Link>
              <Link className={s.card} to={'https://twitter.com'} target={'_blank'} onClick={() => setIsOpen(false)}>
                <Twitter />
                <div className={s.card_title}>
                  <img src={'/arrow-footer.svg'} alt={'go to Twitter'}/>
                  <p className={s.title}>Twitter</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};