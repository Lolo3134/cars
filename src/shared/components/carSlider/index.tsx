import React, { useEffect, useRef } from 'react';
import './carCatalog.css';

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slideRight = () => setCurrentSlide((currentSlide + 1) % images.length);
  const slideLeft = () => setCurrentSlide((currentSlide - 1 + images.length) % images.length);

  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (slide) {
        slide.className = 'slider-single';
        if (index === currentSlide) {
          slide.classList.add('active');
        } else if (index === ((currentSlide - 1 + images.length) % images.length)) {
          slide.classList.add('preactive');
        } else if (index === ((currentSlide + 1) % images.length)) {
          slide.classList.add('proactive');
        }
      }
    });
  }, [currentSlide, images.length]);

  return (
    <div className="slider-container">
      <div className="slider-content">
        {images.map((image, index) => (
          <div key={index} ref={ref => slidesRef.current[index] = ref} className="slider-single">
            <img className="slider-single-image" src={image} alt={`${index}`} />
          </div>
        ))}
      </div>
      <div className="slider__mob__arr">
        <button className="slider-left" onClick={slideLeft}><img src="/Vector-right.svg" alt="Vector-left" /></button>

        <button className="slider-right" onClick={slideRight}><img src="/Vector-left.svg" alt="Vector-right" /></button>
      </div>
    </div>
  );
};

export default Slider;
