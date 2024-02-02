import React from 'react';
import s from './carBlock.module.scss';

interface CarBlockItemProps {
 name: string;
 Icon: React.ElementType | string; 
}

const FooterItem: React.FC<CarBlockItemProps> = ({ name, Icon }) => {
 return (
    <div className={s.carBlock__item}>
      {typeof Icon === 'string' ? <img className={s.icon} src={Icon} alt="" /> : <Icon />}
      <div className={s.carBlock__item__name}>
        <img src="/arrow-footer.svg" alt="" />
        <h1>{name}</h1>
      </div>
    </div>
 );
};
export default FooterItem;
