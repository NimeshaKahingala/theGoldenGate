import React from 'react';
import { Carousel } from 'antd';

import CardiffUni from './assets/images/university-logos/CardiffUni.PNG';
import CoventryUniLondon from './assets/images/university-logos/CoventryUniLondon.png';
import DurhamUni from './assets/images/university-logos/DurhamUni.jpg';
import HollandInternationalStudyCentre from './assets/images/university-logos/HollandInternationalStudyCentre.PNG';
import KingstonUniLondon from './assets/images/university-logos/KingstonUniLondon.png';
import LancasterUni from './assets/images/university-logos/LancasterUni.jpg';
import LeedsBeckettUni from './assets/images/university-logos/LeedsBeckettUni.png';
import LiverpoolJohnMooresUni from './assets/images/university-logos/LiverpoolJohnMooresUni.gif';
import RoyalHollowayUniversityofLondon from './assets/images/university-logos/RoyalHollowayUniversityofLondon.jpg';
import TeessideUni from './assets/images/university-logos/TeessideUni.jpg';
import TheUniversityofSheffield from './assets/images/university-logos/TheUniversityofSheffield.jpg';
import UniversityCollegeDublin from './assets/images/university-logos/UniversityCollegeDublin.png';
import UniversityofAberdeen from './assets/images/university-logos/UniversityofAberdeen.png';
import UniversityofHuddersfield from './assets/images/university-logos/UniversityofHuddersfield.png';
import UniversityofHuddersfieldLondon from './assets/images/university-logos/UniversityofHuddersfieldLondon.png';
import UniversityofLeeds from './assets/images/university-logos/UniversityofLeeds.jpg';
import UniversityofStrathclyde from './assets/images/university-logos/UniversityofStrathclyde.jpg';
import UniversityofSurrey from './assets/images/university-logos/UniversityofSurrey.jpg';
import UniversityofSussex from './assets/images/university-logos/UniversityofSussex.png';


const UniversityCarousel = () => (
  <Carousel autoplay slidesToShow={5}>
    <div>
      <img className="university-img" src={CardiffUni} ></img>
    </div>
    <div>
      <img className="university-img" src={CoventryUniLondon} ></img>
    </div>
    <div>
      <img className="university-img" src={DurhamUni}></img>
    </div>
    <div>
      <img className="university-img" src={HollandInternationalStudyCentre}></img>
    </div>
    <div>
      <img className="university-img" src={KingstonUniLondon}></img>
    </div>
    <div>
      <img className="university-img" src={LancasterUni}></img>
    </div>
    <div>
      <img className="university-img" src={LeedsBeckettUni}></img>
    </div>
    <div>
      <img className="university-img" src={LiverpoolJohnMooresUni}></img>
    </div>
    <div>
      <img className="university-img" src={RoyalHollowayUniversityofLondon}></img>
    </div>
    <div>
      <img className="university-img" src={TeessideUni}></img>
    </div>
    <div>
      <img className="university-img" src={TheUniversityofSheffield}></img>
    </div>
    <div>
      <img className="university-img" src={UniversityCollegeDublin}></img>
    </div>
    <div>
      <img className="university-img" src={UniversityofAberdeen}></img>
    </div>
    <div>
      <img className="university-img" src={UniversityofHuddersfield}></img>
    </div>
    <div>
      <img className="university-img" src={UniversityofHuddersfieldLondon}></img>
    </div>
    <div>
      <img className="university-img" src={UniversityofLeeds}></img>
    </div>
    <div>
      <img className="university-img" src={UniversityofStrathclyde}></img>
    </div>
    <div>
      <img className="university-img" src={UniversityofSurrey}></img>
    </div>
    <div>
      <img className="university-img" src={UniversityofSussex}></img>
    </div>

  </Carousel>
);

export default UniversityCarousel;