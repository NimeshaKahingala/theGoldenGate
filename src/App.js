import './App.scss';
import { Carousel } from 'antd';
import React from 'react';


import logo from './assets/images/logo.svg';
import girlImg from './assets/images/imgGirl.png';
import locationYellow from './assets/images/locationYellow.svg';
import emailYellow from './assets/images/EmailYellow.svg';
import phoneYellow from './assets/images/PhoneYellow.svg';
import whatsappYellow from './assets/images/WhatsappYellow.svg';

import uk from './assets/images/uk.svg';
import aus from './assets/images/aus.svg';
import canada from './assets/images/can.svg';
import india from './assets/images/in.svg';
import nepal from './assets/images/ne.svg';

import IT from './assets/images/courses/IT.png';
import Engineering from './assets/images/courses/eng@2x.png';
import Law from './assets/images/courses/law@2x.png';
import Medicine from './assets/images/courses/med@2x.png';
import Agriculture from './assets/images/courses/agri.png';
import Arts from './assets/images/courses/arts.png';


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

import MainCarousel from './MainCarousel'


function App() {
  return (
    <div className="App">
      <div className="header-top">
        <div className="left">
          <div className="item">INFO@THEGOLDENGATE.UK</div>
          <div className="item">(0044) 1428 483412</div>
        </div>
        <div className="right">
          <div className="item">ABOUT US</div>
          <div className="item">CONTACT US</div>
          <div className="item">TERMS & CONDITIONS</div>
        </div>
      </div>
      <div className="header"> 
        <div className="left"><img src={logo}></img></div>
        <div className="right">
          <div className="item">DOCUMENT LIBRARY</div>
          <div className="btn-apply-now">APPLY NOW</div>
        </div>
      </div>
      <div className="section-welcome">
        <div className="top">
          <div className="left">
            <div className="sub-title">YOUR FAVOURITE OVERSEAS EDUCATION</div>
            <div className="title">WELCOME TO <br/>THE GOLDEN GATE</div>
            <div className="how-it-works">HOW IT WORKS?
              <div className="list"><span className="number">01</span>Download the documents from <span className="text-bold">“Documents Library”</span></div>
              <div className="list"><span className="number">02</span>Fill the downloaded documents</div>
              <div className="list"><span className="number">03</span>Upload by clicking <span className="text-bold">“Apply Now”</span></div>
            </div>
            <div className="students">
              <img></img>
              <span className="link">See what our successful student says</span>
            </div>
          </div>
          <div className="right">
            <div className="flag-wrap">
              <img className="flag" src={uk}></img>
              <img className="flag" src={aus}></img>
              <img className="flag" src={canada}></img>
              <img className="flag" src={india}></img>
              <img className="flag" src={nepal}></img>
            </div>
            <div className="banner-image">   
              <div className="yellow-background"><img className="girl-image" src={girlImg}></img></div>
            </div>
          </div>
        </div>
        <div className="university-list">
          <img className="university-img" src={CardiffUni}></img>
          <img className="university-img" src={CoventryUniLondon}></img>
          <img className="university-img" src={DurhamUni}></img>
          <img className="university-img" src={HollandInternationalStudyCentre}></img>
          <img className="university-img" src={KingstonUniLondon}></img>          
        </div>
      </div>
      <div className="section-video">
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9YffrCViTVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="background-shape"><div className="background-shape-inner"></div></div>
      </div>
      <div className="section-study-abroad">
        <div className="country-icons">
          <img className="flag-1" src={uk}></img>
          <img className="flag-2" src={aus}></img>
          <img className="flag-3" src={canada}></img>
          <img className="flag-4" src={india}></img>
          <img className="flag-5" src={nepal}></img>
        </div>
        <div className="title">STUDY <span className='text-yellow'>ABROAD</span></div>
        <div className="text"><span className="text-bold">TheGoldenGate</span> Education provides vast range of programmes over 5 plus locations in all over the world. 
        We provide a great range of choices for you to select. Once you choose your destination, <br/>our capable team is ready to take you to the next level.</div>
        
        <div className="country-banner-wrap">
          <MainCarousel/>
        </div>
        <div className="btn-find-more">FIND MORE</div>
      </div>
      <div className="section-rates">
        <div className="item">
          <div className="number">100%</div>
          <div className="definition">Free of Consultation</div>
        </div>
        <div className="line"></div>
        <div className="item">
          <div className="number">99%</div>
          <div className="definition">VISA Success Rate</div>
        </div>
        <div className="line"></div>
        <div className="item">
          <div className="number">100+</div>
          <div className="definition">Students Enrolled</div>
        </div>
        <div className="line"></div>
        <div className="item">
          <div className="number">5+</div>
          <div className="definition">Years of Experiences</div>
        </div>
      </div>
      <div className="section-courses">
        <div className="sub-title">ANY COURSES YOU WANT</div>
        <div className="title">HOT <span className='text-yellow'>COURSES</span></div>
        <div className="text">Here are few popular and in demand programs at the moment. Feel free to contact us to select the best options for you. 
          <br/>Here are few popular and in demand programs at the moment. Feel free to contact us to select the <br/>best options for you. Here are few popular and in demand programs at the moment.</div>
        <div className="course-list">
          <div className="item">BSc</div>
          <div className="item">Masters</div>
          <div className="item">MBA</div>
          <div className="item">PhD</div>
        </div>
        <div className="courses">
          <div className="img-wrap img1">
            <div className="image" style={{ backgroundImage: `url(${IT})`}}></div>
            <div className="course-name">Information Technology</div>
          </div>
          <div className="img-wrap img2">
            <div className="image" style={{ backgroundImage: `url(${Engineering})`}}></div>
            <div className="course-name">Engineering</div>
          </div>
          <div className="img-wrap img3">
            <div className="image" style={{ backgroundImage: `url(${Law})`}}></div>
            <div className="course-name">Law</div>
          </div>
          <div className="img-wrap img4">
            <div className="image" style={{ backgroundImage: `url(${Medicine})`}}></div>
            <div className="course-name">Medicine</div>
          </div>
          <div className="img-wrap img5">
            <div className="image" style={{ backgroundImage: `url(${Agriculture})`}}></div>
            <div className="course-name">Agriculture</div>
          </div>
          <div className="img-wrap img6">
            <div className="image" style={{ backgroundImage: `url(${Arts})`}}></div>
            <div className="course-name">Arts</div>
          </div>
        </div>
        <div className="btn-find-more">FIND MORE</div>
      </div>
      <div className="section-student-stories">
        <div className="sub-title">WHAT OUR STUDENTS SAY</div>
        <div className="title">STUDENT <span className='text-yellow'>STORIES</span></div>
      </div>
      <div className="section-about-us">
        <div>
          <div className="left"><img src={logo}></img></div>
          <div className="description">Embark on an adventure. Immerse yourself in student life and the unique local culture of your preferred study destination, 
          while earning a prestigious, internationally recognised degree under the unique guidance of industry experts of over 20 years of service
          </div>
        </div>
        <div>
          <div className="title">CONTACT US</div>
          <div>
            <div><img src={phoneYellow}></img></div>
            <div>(0044) 1428 483412</div>
          </div>
          <div>
            <div><img src={emailYellow}></img></div>
            <div>INFO@THEGOLDENGATE.UK</div>
          </div>
          <div>
            <div><img src={whatsappYellow}></img></div>
            <div>(0044) 7479 735772</div>
          </div>
          <div>
            <div><img src={locationYellow}></img></div>
            <div>GOLDEN GATE INTERNATIONAL, MIDHURST ROAD, HASLEMERE, GU27 3HA</div>
          </div>
        </div>
        <div>
          <div className="title">OUR OFFICES</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
