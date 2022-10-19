import React from 'react';
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="left">
                    <div className="item">© 2022 ALL RIGHTS RESERVED, THEGOLDENGATE.UK</div>
                </div>
                <div className="right">
                    <Link to="/aboutUs" className="item">ABOUT US</Link>
                    <Link to="/contactUs" className="item">CONTACT US</Link>
                    <Link to="/TermsAndConditions" className="item">TERMS & CONDITIONS</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;