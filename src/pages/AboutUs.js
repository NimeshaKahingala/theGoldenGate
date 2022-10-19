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
                        <div className="description">Every year, 1,000,000+ students worldwide leave their homes behind to leap into the unknown.
                            Often making one of the most important and expensive decisions of their lives.
                        </div>
                        <div className='second-block'>We’re using intelligent technology to make sure they can make that decision with confidence, through a trusted marketplace.
                        </div>
                        <div className="bold-text sub-title">OUR MISSION</div>
                        <div className="description">
                            Help students make confident study decisions through <br />a trusted marketplace that connects the world’s <br />institutions, recruiters & service providers.
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