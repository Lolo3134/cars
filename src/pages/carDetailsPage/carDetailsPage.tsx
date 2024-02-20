import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCarQuery } from 'app/providers/store/api/catalog/catalog';
import s from './carDetailsPage.module.scss';
import CarBlock from 'shared/components/carBlock';
import ContactMain from 'shared/components/contactMain';
import Footer from 'shared/components/footer';
import Catalog from 'shared/components/carCatalog';
import Slider from 'shared/components/carSlider';

const CarDetailsPage: React.FC = () => {

  const { car_id } = useParams();
  const { data: car, error, isLoading } = useGetCarQuery(car_id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.car__title}>
          <h1>Book your perfect car</h1>
        </div>
      </div>
      <Slider images={['/slider1.png', '/slider2.png', '/slider3.png']} />
      <div className={s.container}>
        <div className={s.car__tags}>
          <div className={s.car__tag}>Premium Gas Only</div>
          <div className={s.car__tag}>Apple Car play</div>
          <div className={s.car__tag}>Backup Camera</div>
          <div className={s.car__tag}>Convertible Top</div>
          <div className={s.car__tag}>Keyless entry</div>
          <div className={s.car__tag}>Blind Spot warning</div>
          <div className={s.car__tag}>Bluetooth</div>
          <div className={s.car__tag}>GPS</div>
        </div>
        <CarBlock />
        <div className={s.car__blocks}>
          <div className={s.car__block__left}>
            <div className={s.car__block__infoLeft}>
              <p>Security Deposit:</p>
              <p>Includes</p>
              <p>Engine:</p>
              <p>0-60mph in:</p>
              <p>MSRP:</p>
              <p>Horse Power:</p>
            </div>
            <div className={s.car__block__infoRight}>
              <p>$500 – $2000</p>
              <p>100 miles per day</p>
              <p>3.8L V8</p>
              <p>3 sec</p>
              <p>$293,000</p>
              <p>641</p>
            </div>
          </div>

          <div className={s.car__block__right}>
            <h1 className={s.car__block__right__h}><span>$ {car.price}</span>per day</h1>
            <div className={s.car__block__btn}>
              <p>Book your car</p>
            </div>
          </div>
        </div>

        <div className={s.car__perfect__title}>
          <h1>Book your perfect car</h1>
        </div>

        <div className={s.car__perfect}>
          <div className={s.car__perfectLeft}>
            <img src="/carPerfect.png" alt="" />
          </div>
          <div className={s.car__perfectRight}>
            <p>Renting a Aston Martin Vantage also gives you the opportunity to explore Miami and its surroundings in comfort and style. You will be able to visit the best beaches, restaurants, and nightclubs of the city, knowing that you have a powerful sports car that will add a little magic to your trip.</p>
          </div>
        </div>

        <div className={s.carForms}>
          <div className={s.carForm__title}>
            <h1>Book a car Aston Martin Vantage</h1>
            <p>We will contact you within an hour to clarify the details. Or book a car by number +1 404-795-82-99</p>
          </div>
          <form id={s.form__card} action="submit">
            <input type="text" className={s.car__name} placeholder='Name' />
            <input type="text" className={s.car__phone} placeholder='Phone' />
            <button className=''>Book your car</button>
          </form>
          <div className={s.carForm__img}>
            <img src="/carFormImg.png" alt="" />
          </div>
        </div>
      </div>
      <div className={s.more__cars}>
        <Catalog name='More cars'/>
      </div>
      <ContactMain />
      <Footer />
    </>
  );
};

export default CarDetailsPage;
