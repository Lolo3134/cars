// carBlock.tsx
import React from 'react';
import CarBlockItem from './carBlockItem';
import s from './carBlock.module.scss';
import { Seets, Doors, Automatic, MPG } from 'shared/constants';

interface Item {
 name: string;
 icon: React.ElementType | string;
}

const CarBlock: React.FC = () => {
  const items: Item[] = [
    { name: '4 seets', icon: Seets },
    { name: '2 doors', icon: Doors },
    { name: 'Automatic', icon: Automatic },
    { name: '34 MPG', icon: MPG },
  ];

  return (
    <footer id={s.carBlock}>
      <div className={s.container}>
        <div className={s.carBlock__container}>
          {items.map((item, index) => (
            <CarBlockItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default CarBlock;
