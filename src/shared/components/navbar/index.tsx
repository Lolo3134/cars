import React, { useState } from 'react';
import s from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { Arrow } from 'shared/constants';
import { ButtonMobileNav } from './components/button-mobile-nav';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={s.wrapper}>
      <Link to={'/'} className={s.logo}>
        EASY<span className={s.logo__bold}>RIDE</span>
      </Link>
      <div className={s.nav}>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/catalog'}>Car catalog</Link>
          <Link to={'/contacts'}>Contacts</Link>
        </nav>
        <div className={s.nav__right}>
          <a href={'tel:+14047958299'} className={s.phone}>+1 404-795-82-99</a>
          <Link to={'/auth'} className={s.auth}>
            <Arrow />
            Login in
          </Link>
        </div>
      </div>
      <div className={s.mobile_nav}>
        <ButtonMobileNav isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
};