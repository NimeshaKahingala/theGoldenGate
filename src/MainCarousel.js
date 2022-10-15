import React from 'react';
import { Carousel } from 'antd';

import AusBannerImg from './assets/images/Banner Image/Australia.jpg';
import CanBannerImg from './assets/images/Banner Image/Canada.jpg';
import IndiaBannerImg from './assets/images/Banner Image/India.jpg';
import NepalBannerImg from './assets/images/Banner Image/Nepal.jpg';


const MainCarousel = () => (
  <Carousel autoplay>
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