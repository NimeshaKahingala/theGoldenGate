import './Home.scss';
import { Carousel } from 'antd';
import React from 'react';
import {
  Link,
} from "react-router-dom";


// import logo from './assets/images/logo.svg';
import logoBlue from './assets/images/logoBlue.svg';
import girlImg from './assets/images/imgGirl.png';
import dotImg from './assets/images/dotGroup.svg';
import locationYellow from './assets/images/locationYellow.svg';
import emailYellow from './assets/images/EmailYellow.svg';
import phoneYellow from './assets/images/PhoneYellow.svg';
import whatsappYellow from './assets/images/WhatsappYellow.svg';
import map from './assets/images/map_small.svg';

import whatsappLogo from './assets/images/whtsapplogo.jpg';

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

import student1 from './assets/images/student images/student1.png';
import student2 from './assets/images/student images/student2.png';
import student3 from './assets/images/student images/student3.png';
import student4 from './assets/images/student images/student4.png';
import student5 from './assets/images/student images/student5.svg';
import student6 from './assets/images/student images/student6.svg';


import CardiffUni from './assets/images/university-logos/CardiffUni.PNG';
import CoventryUniLondon from './assets/images/university-logos/CoventryUniLondon.png';
import DurhamUni from './assets/images/university-logos/DurhamUni.jpg';
import HollandInternationalStudyCentre from './assets/images/university-logos/HollandInternationalStudyCentre.PNG';
import KingstonUniLondon from './assets/images/university-logos/KingstonUniLondon.png';


import MainCarousel from './MainCarousel';
import StudentStories from './StudentStories';
import UniversityCarousel from './University';
import Navbar from './components/Navbar';
import Footer from './components/footer';


function Home() {
  return (
    <div className="App">
      <Navbar/>
      <div className="section-welcome">
        <div className="top">
          <div className="left">
            <div className="sub-title">YOUR FAVOURITE OVERSEAS EDUCATION</div>
            <div className="title">WELCOME TO <br/>THE GOLDEN GATE</div>
            <div className="how-it-works">HOW IT WORKS?
              <div className="list"><span className="number green">01</span>Download the documents from <span className="text-bold">“Documents Library”</span></div>
              <div className="list"><span className="number purple">02</span>Fill the downloaded documents</div>
              <div className="list"><span className="number yellow">03</span>Upload by clicking <span className="text-bold">“Apply Now”</span></div>
            </div>
            <div className="students">
              <img className='student-img stu1' src={student1}></img>
              <img className='student-img stu2' src={student2}></img>
              <img className='student-img stu3' src={student3}></img>
              <img className='student-img stu4' src={student4}></img>
              <img className='student-img stu5' src={student5}></img>
              <img className='student-img stu6' src={student6}></img>
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
              <div className="yellow-background">
              <div className='dot-image'><img src={dotImg}></img></div>
              <img className="girl-image" src={girlImg}></img>
            </div>
              
            </div>
          </div>
        </div>
        <div className="university-list">
          <UniversityCarousel/>         
        </div>
      </div>
      <div className='whtsapp-logo-wrap'><img className='whatsapp-logo' src={whatsappLogo}></img></div>
      <div className="section-video">
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zEkAeQV1PEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        <div className='student-stories-wrap'>
        <StudentStories/>
        </div>
      </div>
      <div className="section-about-us">
        <div className="section">
          <div className="logo-wrap"><img src={logoBlue}></img></div>
          <div className="description">Embark on an adventure. Immerse yourself in student life and the unique local culture of your preferred study destination, 
          while earning a prestigious, internationally recognised degree under the unique guidance of industry experts of over 20 years of service
          </div>
        </div>
        <div className="section">
          <div className="title">CONTACT US <div className="divider"></div></div>
          <div className="details">
            <div className='icon'><img src={phoneYellow}></img></div>
            <div className='value'>(0044) 1428 483412</div>
          </div>
          <div className="details">
            <div className='icon'><img src={emailYellow}></img></div>
            <div className='value'>INFO@THEGOLDENGATE.UK</div>
          </div>
          <div className="details">
            <div className='icon'><img src={whatsappYellow}></img></div>
            <div className='value'>(0044) 7479 735772</div>
          </div>
          <div className="details">
            <div className='icon'><img src={locationYellow}></img></div>
            <div className='value'>GOLDEN GATE INTERNATIONAL, MIDHURST ROAD, HASLEMERE, GU27 3HA</div>
          </div>
        </div>
        <div className="section">
          <div className="title">OUR OFFICES<div className="divider"></div></div>
          <div className="img-map" style={{backgroundImage: `url(${map})`}}></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
