import React from 'react';

interface Item {
  image: string;
  category: string;
  seats: string;
  mpg: string;
  model: string;
  price: number;
}

interface CardProps {
  item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt="img" draggable="false" />
      <div className="card__categories">
        <p>{item.category}</p>
        <p>{item.seats}</p>
        <p>{item.mpg}</p>
      </div>
      <h2>{item.model}</h2>
      <span>From $ {item.price} per day</span>
      <button className="catalog__btn">Select</button>
    </div>
  );
};

export default Card;
