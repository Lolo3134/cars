import React, { FC } from 'react';
import s from './button-mobile-nav.module.scss';
import { MobileProps } from 'shared/components/navbar/navbar.types';

export const ButtonMobileNav: FC<MobileProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={s.container}>
      <button className={`${s.menu_toggle} ${isOpen ? s.nav_open : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${s.menu_toggle_bar} ${s.menu_toggle_bar__top}`}></span>
        <span className={`${s.menu_toggle_bar} ${s.menu_toggle_bar__bottom}`}></span>
      </button>
    </div>
  );
};