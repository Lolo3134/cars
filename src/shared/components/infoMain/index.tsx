import React from 'react';
import './infoMain.css';

const InfoMain: React.FC = () => {
  return (
    <section className="info__main">
      <div className="container">
        <div className="info__container">
          <div className="info__title">
            <h1>You can use our service and rent a car online</h1>
          </div>
          <div className="info__block">
            <div className="info__block__left">
              <button className="info__block__btn">Book your car</button>
            </div>
            <div className="info__block__right">
              <p>
                Fast, convenient, stylish - that&apos;s EasyRide. <br className="info__br" /><br className="info__br" />
                Book your perfect car today and start exploring Miami without limits!
              </p>
              <div className="info__block__right__images">
                <div className="info__none">Book your car</div>
                <img className="car-none" src="/Car1.svg" alt="" />
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
