// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import s from './car.module.scss';
import { Car } from 'shared/components/carCatalog/car-catalog.types';

interface CardProps {
 item: Car;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className={s.card}>
      <img src={item.photos} alt="img" draggable="false" />
      <div className={s.card__categories}>
        {item.specifications.map((specification, index) => (
          <p key={index}>
            {specification.value} {specification.name}
          </p>
        ))}
      </div>
      <h2>{item.brand} {item.car_model}</h2>
      <span>From $ {item.price} per day</span>
      <Link to={`/cars/${item.car_id}`}>
        <button className={s.catalog__btn}>Select</button>
      </Link>
    </div>
  );
};

export default Card;
