import React, { useState, useEffect, useRef } from 'react';
import Card from '../сard';
import s from './carCatalog.module.scss';
import { Car } from 'shared/components/carCatalog/car-catalog.types';
import { useGetCarsQuery } from 'app/providers/store/api/catalog/catalog';
interface CarouselProps {
 items: Car[];
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

  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.round(carouselRef.current!.scrollLeft / carouselRef.current!.clientWidth);
      setActiveSlideIndex(index + 1);
    };

  carouselRef.current!.addEventListener('scroll', handleScroll);

  return () => {
    // carouselRef.current!.removeEventListener('scroll', handleScroll);
  };
  }, []);

  return (
    <>
      <div className={s.carousel} ref={carouselRef}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className={s.container}>
        <div className={s.catalog__card__swiper}>
          <p>{activeSlideIndex}/{items.length}</p>
          <div className={s.swiper__line}></div>
          <div className={s.swiper__btn}>
            <img onClick={() => handleArrowClick('left')} id="left" src='/arrow2.svg' className={s.i} />
            <img onClick={() => handleArrowClick('right')} id="right" src='/arrow1.svg' className={s.i} />
          </div>
        </div>
      </div>
    </>
  );
};

interface NameProps {
  name: string;
}

const Catalog: React.FC<NameProps> = ({ name }) => {
  const { data: items, error, isLoading } = useGetCarsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className={s.catalog}>
      <div className={s.wrapper}>
        <h1 className={s.car__catalog__title}>{name}</h1>
        <Carousel items={items} />
      </div>
    </section>
  );
};

export default Catalog;
