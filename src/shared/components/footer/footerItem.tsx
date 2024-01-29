import React from 'react';
import s from './footer.module.scss';

interface FooterItemProps {
 name: string;
 Icon: React.ElementType | string; 
}

const FooterItem: React.FC<FooterItemProps> = ({ name, Icon }) => {
 return (
    <div className={s.footer__item}>
      {typeof Icon === 'string' ? <img className={s.icon} src={Icon} alt="" /> : <Icon />}
      <div className={s.footer__item__name}>
        <img src="/arrow-footer.svg" alt="" />
        <h1>{name}</h1>
      </div>
    </div>
 );
};

export default FooterItem;
