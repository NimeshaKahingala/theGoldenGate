import React from 'react';
import Navbar from '../components/Navbar';
import './../assets/scss/contactUs.scss';

import locationYellow from './../assets/images/locationYellow.svg';
import emailYellow from './../assets/images/EmailYellow.svg';
import phoneYellow from './../assets/images/PhoneYellow.svg';
import whatsappYellow from './../assets/images/WhatsappYellow.svg';
import fbYellow from './../assets/images/fbYellow.svg';
import instaYellow from './../assets/images/instaYellow.svg';
import linkedinYellow from './../assets/images/linkedinYellow.svg';

function ContactUs() {
    return (
        <div>
            <Navbar />
            <div className="page-contact-us">
                <div className="about-us-inner">
                    <div className="top">
                        <div className="sub-title">KEEP IN TOUCH</div>
                        <div className="title">CONTACT <span className="text-yellow">US</span></div>
                    </div>

                    <div className="section-contact-us">
                        <div className='contact-us-inner'>
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
                        </div>

                        <div className="section">
                            <div className="title">FIND US ON<div className="divider"></div></div>
                            <div className="details">
                                <div className='icon'><img src={fbYellow}></img></div>
                                <div className='value'>/THEGOLDENGATE</div>
                            </div>
                            <div className="details">
                                <div className='icon'><img src={instaYellow}></img></div>
                                <div className='value'>/THEGOLDENGATE</div>
                            </div>
                            <div className="details">
                                <div className='icon'><img src={linkedinYellow}></img></div>
                                <div className='value'>/THEGOLDENGATE</div>
                            </div>
                        </div>

                        <div className="section">
                            <div className="title">LOCATIONS<div className="divider"></div></div>
                            <div className="details">
                                <div className='icon'><img src={locationYellow}></img></div>
                                <div className='value'>GOLDEN GATE INTERNATIONAL, <br/>MIDHURST ROAD, HASLEMERE, GU27 3HA</div>
                            </div>
                            <div className="details">
                                <div className='icon'><img src={locationYellow}></img></div>
                                <div className='value'>SUITE 602, 6TH FLOOR 252-262ROMFORD ROAD, <br/>LONDON, ENGLAND, E7 9HZ</div>
                            </div>
                        </div>
                        </div>
                        <div className="background-shape"><div className="background-shape-inner"></div></div>

                    </div>


                </div>
            </div>
        </div>
    )

}

export default ContactUs;