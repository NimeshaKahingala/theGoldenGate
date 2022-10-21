import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button, Modal, Image } from 'antd';


import logo from '../assets/images/logo.svg';
import fbWhite from '../assets/images/fbWhite.svg';
import fbYellow from '../assets/images/fbYellow.svg';
import EmailWhite from '../assets/images/EmailWhite.svg';
import EmailBlue from '../assets/images/EmailBlue.svg';
import InstaWhite from '../assets/images/InstaWhite.svg';
import InstaYellow from '../assets/images/instaYellow.svg';
import LinWhite from '../assets/images/LinWhite.svg';
import LinYellow from '../assets/images/linkedinYellow.svg';
import PhoneWhite from '../assets/images/PhoneWhite.svg';
import PhoneBlue from '../assets/images/PhoneBlue.svg';
import hamburgerMenu from '../assets/images/hamburgerMenu.svg';
import closeWhite from '../assets/images/closeWhite.svg';
import arrowWhite from '../assets/images/arrowWhite.svg';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    let location = useLocation();
    const { pathname } = location;
    return (
        <>
            <div className="header-top">
                <div className="header-inner">
                    <div className="left">
                        <a className="item" href='mailto:INFO@THEGOLDENGATE.UK'><img className='icon' src={EmailWhite}></img>INFO@THEGOLDENGATE.UK</a>
                        <a className="item" href='tel:(0044) 1428 483412'><img className='icon' src={PhoneWhite}></img>(0044) 1428 483412</a>
                    </div>
                    <div className="right">
                        <Link to="/aboutUs" className={`item ${pathname === "/aboutUs" && 'active' }`}>ABOUT US</Link>
                        <Link to="/contactUs" className={`item ${pathname === "/contactUs" && 'active' }`}>CONTACT US</Link>
                        <Link to="/TermsAndConditions" className={`item ${pathname === "/TermsAndConditions" && 'active' }`}>TERMS & CONDITIONS</Link>
                        <div>
                            <a href='' target="_blank"><img className='icon' src={fbWhite}></img></a>
                            <a href='https://www.instagram.com/thegoldengate_int/' target="_blank"><img className='icon' src={InstaWhite}></img></a>
                            <a href='https://www.linkedin.com/in/thegoldengate-int/' target="_blank"><img className='icon' src={LinWhite}></img></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                {pathname === '/Documents' ?
                    <div className="header-inner document-page">
                        <Link to="/" className="item"><img src={arrowWhite} className="icon"></img>GO BACK</Link>
                    </div> :

                    <div className="header-inner">
                        <Link to="/" className="left"><img src={logo}></img></Link>
                        <div className="right desktop">
                            <Link to="/Documents" className="item">DOCUMENT LIBRARY</Link>
                            <Link to="/Documents" className="btn-apply-now">APPLY NOW</Link>
                        </div>
                        <div className='right mobile'>
                            <img src={hamburgerMenu} onClick={() => setIsModalOpen(true)}></img>
                        </div>
                        <Modal title={<Image src={logo} />} closeIcon={<img src={closeWhite}></img>} open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} className="menu-modal">
                            <Link to="/aboutUs" className='list-item'>ABOUT US</Link>
                            <Link to="/contactUs" className="list-item">CONTACT US</Link>
                            <Link to="/TermsAndConditions" className="list-item">TERMS & CONDITIONS</Link>
                            <div className='list-item'><img src={EmailBlue} className='icon'></img>INFO@THEGOLDENGATE.UK</div>
                            <div className='list-item'><img src={PhoneBlue} className='icon'></img>(0044) 1428 483412</div>
                            <div className='list-item'>
                                <a className='social-media' href='' target="_blank"><img src={fbYellow}></img></a>
                                <a className='social-media' href='https://www.instagram.com/thegoldengate_int/' target="_blank"><img src={InstaYellow}></img></a>
                                <a className='social-media' href='https://www.linkedin.com/in/thegoldengate-int/' target="_blank"><img src={LinYellow}></img></a>
                            </div>
                            <div className='btn'><Link to="/Documents" className='btn-documents'>DOCUMENT LIBRARY</Link></div>
                            <div className='btn'><Link to="/Documents" className='btn-apply'>APPLY NOW</Link></div>
                        </Modal>
                    </div>
                }
            </div>
        </>
    )

}

export default Navbar;