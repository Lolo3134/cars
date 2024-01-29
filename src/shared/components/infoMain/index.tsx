import React from 'react';
import s from './infoMain.module.scss';

const InfoMain: React.FC = () => {
  return (
    <section className={s.info__main}>
      <div className={s.container}>
        <div className={s.info__container}>
          <div className={s.info__title}>
            <h1>You can use our service and rent a car online</h1>
          </div>
          <div className={s.info__block}>
            <div className={s.info__block__left}>
              <button className={s.info__block__btn}>Book your car</button>
            </div>
            <div className={s.info__block__right}>
              <p>
                Fast, convenient, stylish - that&apos;s EasyRide. <br className={s.info__br} /><br className={s.info__br} />
                Book your perfect car today and start exploring Miami without limits!
              </p>
              <div className={s.info__block__right__images}>
                <div className={s.info__none}>Book your car</div>
                <img className={s.car_none} src="/Car1.svg" alt="" />
                <img src="Car2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMain;
