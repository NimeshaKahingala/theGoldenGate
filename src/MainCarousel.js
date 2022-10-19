import React from 'react';
import { Carousel } from 'antd';

import AusBannerImg from './assets/images/Banner Image/aus.png';
import CanBannerImg from './assets/images/Banner Image/can.png';
import IndiaBannerImg from './assets/images/Banner Image/ind.png';
import NepalBannerImg from './assets/images/Banner Image/nepal.png';
import UkBannerImg from './assets/images/Banner Image/uk.png';


const MainCarousel = () => (
  <Carousel autoplay>
    <div>
      <div className="country-banner-img" style={{ backgroundImage: `url(${UkBannerImg})` }} ></div>
    </div>
    <div>
      <div className="country-banner-img" style={{ backgroundImage: `url(${AusBannerImg})` }} ></div>
    </div>
    <div>
      <div className="country-banner-img" style={{ backgroundImage: `url(${CanBannerImg})` }} ></div>
    </div>
    <div>
      <div className="country-banner-img" style={{ backgroundImage: `url(${IndiaBannerImg})` }} ></div>
    </div>
    <div>
      <div className="country-banner-img" style={{ backgroundImage: `url(${NepalBannerImg})` }} ></div>
    </div>
  </Carousel>
);

export default MainCarousel;