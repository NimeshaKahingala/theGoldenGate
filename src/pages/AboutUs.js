import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import './../assets/scss/aboutUs.scss';

import pathum from './../assets/images/about us/pat.png';
import dhaba from './../assets/images/about us/dab.png';
import ashika from './../assets/images/about us/ash.png';
import user from './../assets/images/about us/user.svg';
import dileepa from './../assets/images/about us/dileepa.png';
import vindya from './../assets/images/about us/vind.png';
import vinoth from './../assets/images/about us/vinoth.png';
import thushan from './../assets/images/about us/thushan.png';
import pulasthi from './../assets/images/about us/pul.png';


import map from './../assets/images/map_small.svg';

function AboutUs() {
    return (
        <div>
            <Navbar />
            <div className="page-about-us">
                <div className="about-us-inner">
                    <div className="section">
                        <div className="sub-title">WHO WE ARE</div>
                        <div className="title">ABOUT <span className="text-yellow">US</span></div>
                        <div className="description">TheGoldenGate Int. is one of the leading education consultants currently representing reputable Universities and Colleges in the UK.
                         We have a strong relationship with most popular academic institutions in the United Kingdom and we provide University Admission for the International Students
                          from overseas countries. 
                        </div>
                        <div className='second-block'>We provide very high professional career counselling services to the students who seek admissions to the Universities and Colleges 
                          to study undergraduate, Postgraduate and other Professional courses accepted by UK authorities. As we posses an excellent knowledge about the various courses 
                          offered by the Universities and the Colleges in UK. We can provide valuable advises to the prospective students in selecting proper courses according to their
                           present qualifications and also in selecting a good educational institute. 
                        </div>
                        {/* <div className="bold-text sub-title">OUR MISSION</div> */}
                        <div className="description">
                        Our further services include assisting the students in following Visa procedures, 
                           coordinating with Universities/Colleges regarding admission procedures and also in obtaining the scholarships.
                        </div>
                    </div>
                    <div className="section">
                        <div className="img-map" style={{ backgroundImage: `url(${map})` }}></div>
                    </div>
                </div>
                <div>
                    <div className='content'>
                        <div className="our-team">
                            <div className="sub-title">WHO WE ARE</div>
                            <div className="title">OUR <span className="text-yellow">TEAM</span></div>
                            <div className='text'><span className='bold'>TheGoldenGate </span>Education provides vast range of programmes over 13 plus locations in all over the world. <br />
                                Meet our team members behind the scene, and who are here to help you.
                            </div>
                            <div className='content'>
                                <div className='team-member'>
                                    <div className='image'><img src={pathum}></img></div>
                                    <div className='name'>Pathum Suranga</div>
                                    <div className='position'>CEO</div>
                                </div>
                                <div className='team-member'>
                                    <div className='image'><img src={dhaba}></img></div>
                                    <div className='name'>Prof. Daba Chauwdri</div>
                                    <div className='position'>Partner</div>
                                </div>
                                <div className='team-member'>
                                    <div className='image'><img src={ashika}></img></div>
                                    <div className='name'>Dr. Ashika Dulanjali</div>
                                    <div className='position'>Managing Director</div>
                                </div>
                                <div className='team-member'>
                                    <div className='image'><img src={user}></img></div>
                                    <div className='name'>Prabath Liyanage</div>
                                    <div className='position'>Secretary</div>
                                </div>
                                <div className='team-member'>
                                    <div className='image'><img src={dileepa}></img></div>
                                    <div className='name'>Dileepa Rathnayaka</div>
                                    <div className='position'>Operation Co-ordinator</div>
                                </div>
                                <div className='team-member'>
                                    <div className='image'><img src={vindya}></img></div>
                                    <div className='name'>Vindhya Fernando</div>
                                    <div className='position'>Senior Student Consultant & Accountant</div>
                                </div>
                                <div className='team-member'>
                                    <div className='image'><img src={vinoth}></img></div>
                                    <div className='name'>Vinoth K</div>
                                    <div className='position'>Head of IT</div>
                                </div>
                                <div className='team-member'>
                                    <div className='image'><img src={thushan}></img></div>
                                    <div className='name'>Thushan Dissanayake</div>
                                    <div className='position'>IT Consultant</div>
                                </div>
                                <div className='team-member'>
                                    <div className='image'><img src={pulasthi}></img></div>
                                    <div className='name'>Pulasthi Withana</div>
                                    <div className='position'>IT Consultant</div>
                                </div>
                            </div>
                        </div>
                        <div className="background-shape"><div className="background-shape-inner"></div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default AboutUs;