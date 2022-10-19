import React from 'react';
import { Carousel } from 'antd';
import '../src/assets/scss/studentStories.scss';

import dhammika from './assets/images/student images/dhammika.png';
import pulasthi from './assets/images/student images/pulasthi.png';
import sadupama from './assets/images/student images/sadupama.png';
import thushan from './assets/images/student images/thushan.png';
import student from './assets/images/student images/student.png';


const StudentStories = () => (
  <Carousel autoplay>
    <div className='story-wrap'>
      <div className="student-img" style={{ backgroundImage: `url(${dhammika})` }} ></div>
      <div className='student-name'>Dhammika</div>
      <div className='university-name'>University of South Wales</div>
      <div className='description'>If anyone needs to go for higher studies in overseas, then look no further. The only place you have to step in is the Golden gate Consultants. 
      I went to the UK 🇬🇧 in 2020 for my MSc in University of South Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 and I got the UK Tier 4 Student visa in 6 days. I got this visa through Golden gate  and they gave me 
      a tremendous support throughout the entire process. Their staff was very friendly and highly supportive. They will assist you in every single aspect of your visa process no 
      matter what your circumstances are. Highly recommending this place to everyone who is seeking for a bright future.
      </div>
    </div>
    <div className='story-wrap'>
      <div className="student-img" style={{ backgroundImage: `url(${pulasthi})` }} ></div>
      <div className='student-name'>Pulasthi</div>
      <div className='university-name'>University of South Wales</div>
      <div className='description'>To anyone who's planning or even dreaming to come to the UK for higher studies, i HIGHLY recommend 'Golden Gate International' consultants. 
      I'm a student myself who completed his BSc in Sri Lanka and planning to go to the UK and that's when I got to know about 'Golden Gate International'. I contacted them 
      and they provided me all the information I need regarding the whole process. They didn't just provide information, they guided me from the start where I got to select
       a University and a Degree that suits me until the day I get my Visa. I was able to get my visa in a very short time period as well. I was expecting it to take a lot 
       longer given the situation back there in Sri Lanka. I came to the UK mid 2021 for higher studies at University of South Wales and its been over a year now, I completed 
       my Degree (MSc. in Cyber Security) and now i'm in a good place. I'm really glad that I found Golden Gate. I wont forget the Guidance and the support they provided me. 
       The staff is very friendly and you can literally ask any question you have related to the process and they will do their best to make sure you get the answers you need. 
       If you are planning to move to the UK, I recommend you to contact Golden Gate International.
      </div>
    </div>
    <div className='story-wrap'>
      <div className="student-img" style={{ backgroundImage: `url(${sadupama})` }} ></div>
      <div className='student-name'>Sadupama</div>
      <div className='university-name'>Nortumbria University</div>
      <div className='description'>I was wandering with no proper aim to achieve my higher study goal until I contact Mr. Pathum Kuruvita who understood my passion and secured 
      me a master degree programme of international project management at  Nortumbria University with a scholarship within a shorter period of two months. Continuous guidance 
      was given till I get the visa and even to live in London, to search accomodations and so on. Most importantly I would like to appreciate his encouragement given me personally 
      to reach the target.  Highly recommended for everyone.
      </div>
    </div>
    <div className='story-wrap'>
      <div className="student-img" style={{ backgroundImage: `url(${thushan})` }} ></div>
      <div className='student-name'>Thushan</div>
      <div className='university-name'>Ulster University</div>
      <div className='description'>I would strongly recommend Golden Gate to anyone seeking student visa faster to enter the UK. I got my student visa to pursue my MSc in 
      International Business at Ulster University for Autumn intake in 2022 from Golden Gate and my overall experience with them especially their Director Mr Pathum K has 
      always been compassionate and the entire process helped me understand everything comprehensively that could be challenging to anyone in a transition. 
      I would encourage anyone to get support from GG for your student visa and learn that you will be listened throughout the process until you enter your dream destination.
      </div>
    </div>
    <div className='story-wrap'>
      <div className="student-img" style={{ backgroundImage: `url(${student})` }} ></div>
      <div className='student-name'>student</div>
      <div className='university-name'>University of South Wales</div>
      <div className='description'>If anyone needs to go for higher studies in overseas, then look no further. The only place you have to step in is the Golden gate Consultants. 
      I went to the UK 🇬🇧 in 2020 for my MSc in University of South Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 and I got the UK Tier 4 Student visa in 6 days. I got this visa through Golden gate  and they gave me 
      a tremendous support throughout the entire process. Their staff was very friendly and highly supportive. They will assist you in every single aspect of your visa process no 
      matter what your circumstances are. Highly recommending this place to everyone who is seeking for a bright future.
      </div>
    </div>
  </Carousel>
);

export default StudentStories;