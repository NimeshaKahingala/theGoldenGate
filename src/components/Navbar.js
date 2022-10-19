import React from 'react';
import {Link} from "react-router-dom";

import logo from '../assets/images/logo.svg';

function Navbar() {
    return (
        <>
            <div className="header-top">
                <div className="header-inner">
                    <div className="left">
                        <div className="item">INFO@THEGOLDENGATE.UK</div>
                        <div className="item">(0044) 1428 483412</div>
                    </div>
                    <div className="right">
                        <Link to="/aboutUs" className="item">ABOUT US</Link>
                        <Link to="/contactUs" className="item">CONTACT US</Link>
                        <Link to="/TermsAndConditions" className="item">TERMS & CONDITIONS</Link>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="header-inner">
                    <Link to="/" className="left"><img src={logo}></img></Link>
                    <div className="right">
                        <Link to="/Documents" className="item">DOCUMENT LIBRARY</Link>
                        <div className="btn-apply-now">APPLY NOW</div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar;