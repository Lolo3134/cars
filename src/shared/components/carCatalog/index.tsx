import React, { useState, useEffect, useRef } from 'react';
// import Car1 from '../../assets/images/img-1.svg';
// import Car2 from '../../assets/images/img-2.svg';
// import Car3 from '../../assets/images/img-3.svg';
// import Car4 from '../../assets/images/img-4.svg';
// import Car5 from '../../assets/images/img-5.svg';
// import Car6 from '../../assets/images/img-6.svg';
// import ArrowLeft from '../../assets/arrow1.svg';
// import ArrowRight from '../../assets/arrow2.svg';
import Card from '../сard';
import './carCatalog.css';

interface Item {
 id: number;
 image: string;
 category: string;
 seats: string;
 mpg: string;
 model: string;
 price: string;
}

interface CarouselProps {
 items: Item[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setStartScrollLeft(carouselRef.current!.scrollLeft);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 3;
    carouselRef.current!.scrollLeft = startScrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleArrowClick = (direction: string) => {
    carouselRef.current!.scrollLeft += direction === 'left' ? -carouselRef.current!.offsetWidth : carouselRef.current!.offsetWidth;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel!.addEventListener('mousedown', handleMouseDown);
    carousel!.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    carousel!.addEventListener('mouseleave', handleMouseUp);

    return () => {
      carousel!.removeEventListener('mousedown', handleMouseDown);
      carousel!.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      carousel!.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [startX, startScrollLeft, isDragging, handleMouseMove]);

  return (
    <>
      <div className="carousel" ref={carouselRef}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="container">
        <div className="catalog__card__swiper">
          <p>03/24</p>
          <div className="swiper__line"></div>
          <div className="swiper__btn">
            <img onClick={() => handleArrowClick('left')} id="left" src='/arrow2.svg' className="i catalog__left" />
            <img onClick={() => handleArrowClick('right')} id="right" src='/arrow1.svg' className="i catalog__right" />
          </div>
        </div>
      </div>
    </>
  );
};

const Catalog: React.FC = () => {
  const items: Item[] = [
    {
      id: 1,
      image: '/images/img-1.svg',
      category: 'Manual',
      seats: '5 Seats',
      mpg: '34 MPG',
      model: 'Toyota New Yaris',
      price: '22.47',
    },
    {
      id: 2,
      image: '/images/img-2.svg',
      category: 'Manual',
      seats: '5 Seats',
      mpg: '34 MPG',
      model: 'Toyota New Yaris',
      price: '22.47',
    },
    {
      id: 3,
      image: '/images/img-3.svg',
      category: 'Manual',
      seats: '5 Seats',
      mpg: '34 MPG',
      model: 'Toyota New Yaris',
      price: '22.47',
    },
    {
      id: 4,
      image: '/images/img-4.svg',
      category: 'Manual',
      seats: '5 Seats',
      mpg: '34 MPG',
      model: 'Toyota New Yaris',
      price: '22.47',
    },
    {
      id: 5,
      image: '/images/img-5.svg',
      category: 'Manual',
      seats: '5 Seats',
      mpg: '34 MPG',
      model: 'Toyota New Yaris',
      price: '22.47',
    },
    {
      id: 6,
      image: '/images/img-6.svg',
      category: 'Manual',
      seats: '5 Seats',
      mpg: '34 MPG',
      model: 'Toyota New Yaris',
      price: '22.47',
    },
  ];

  return (
    <section className="catalog">
      <div className="wrapper">
        <h1 className="car__catalog__title">Car catalog</h1>
        <Carousel items={items} />
      </div>
    </section>
  );
};

export default Catalog;
