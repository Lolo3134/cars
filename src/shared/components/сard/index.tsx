import React from 'react';
import s from './car.module.scss';

interface Item {
  image: string;
  category: string;
  seats: string;
  mpg: string;
  model: string;
  price: string;
}

interface CardProps {
  item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className={s.card}>
      <img src={item.image} alt="img" draggable="false" />
      <div className={s.card__categories}>
        <p>{item.category}</p>
        <p>{item.seats}</p>
        <p>{item.mpg}</p>
      </div>
      <h2>{item.model}</h2>
      <span>From $ {item.price} per day</span>
      <button className={s.catalog__btn}>Select</button>
    </div>
  );
};

export default Card;
