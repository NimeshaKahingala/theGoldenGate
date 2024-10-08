import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/scss/document.scss';
import downloadIcon from '../assets/images/download.svg';
import arrowRightYellow from '../assets/images/arrowRightYellow.svg';
import EngagementLetter from '../assets/images/documents/EngagementLetter.pdf';
import VisaApplicationSubmissionForm from '../assets/images/documents/VisaApplicationSubmissionForm.pdf';

function Documents() {
    return (
        <div>
            <Navbar />
            <div className="page-documents">
                <div className='page-style'></div>
                <div className='content'>
                    <div className="document-inner">
                        <div className="sub-title">NOTE, DOWNLOAD & APPLY</div>
                        <div className="title">DOCUMENT <span className="text-yellow">LIBRARY</span></div>

                        <div className='content'>
                            <div className='left desktop'>
                                <div className='section step green'>
                                    STEP 01
                                </div>
                                <div className='dotted-line line1'></div>
                                <div className='section step purple'>
                                    STEP 02
                                </div>
                                <div className='dotted-line line2'></div>
                                <div className='section step yellow'>
                                    STEP 03
                                </div>
                            </div>

                            <div className='right'>
                            <div className='dotted-line line2 mobile'></div>
                                <div className='section step green mobile'>
                                    STEP 01
                                </div>
                                <div className='section green'>
                                    <div className='sub-text'>BEFORE YOU APPLY</div>
                                    <div className='name'>Latest CV</div>
                                    <div className='text'>Make sure you have the updated latest CV</div>
                                </div>
                                <div className='section green'>
                                    <div className='sub-text'>BEFORE YOU APPLY</div>
                                    <div className='name'>Work Experience Letters</div>
                                    <div className='text'>Get all your work experience letters scanned</div>
                                </div>
                                <div className='section green'>
                                    <div className='sub-text'>BEFORE YOU APPLY</div>
                                    <div className='name'>Degree Certificates</div>
                                    <div className='text'>Get your Degree Certificates or transcripts scanned</div>
                                </div>
                                <div className='section green'>
                                    <div className='sub-text'>BEFORE YOU APPLY</div>
                                    <div className='name'>Education Certificates</div>
                                    <div className='text'>Get all your educational certificates scanned</div>
                                </div>
                                <div className='section green'>
                                    <div className='sub-text'>BEFORE YOU APPLY</div>
                                    <div className='name'>IELTS Certificates</div>
                                    <div className='text'>Get your IELTS certificate scanned</div>
                                </div>
                                <div className='section green'>
                                    <div className='sub-text'>BEFORE YOU APPLY</div>
                                    <div className='name'>SOP - 500 to 2000 words</div>
                                    <div className='text'>Prepare your personal statement (500 to 2000 words)</div>
                                </div>

                                <div className='section step purple mobile'>
                                    STEP 02
                                </div>
                                <a className='section purple' href={EngagementLetter} download>
                                    <a className='download-icon'><img src={downloadIcon}></img></a>
                                    <div className='right'>
                                    <div className='sub-text'>DOWNLOAD</div>
                                    <div className='name'>Engagement Letter</div>
                                    <div className='text'>You can sign and start apply</div>
                                    </div>
                                </a>
                                <a className='section purple' href={VisaApplicationSubmissionForm} download>
                                 <a className='download-icon'><img src={downloadIcon}></img></a>
                                 <div className='right'>
                                    <div className='sub-text'>DOWNLOAD</div>
                                    <div className='name'>Visa Application Submission Form</div>
                                    <div className='text'>Student Visa of your or your spouse</div>
                                    </div>
                                </a>


                                <div className='section step yellow mobile'>
                                    STEP 03
                                </div>
                                <a className='section yellow' href="https://docs.google.com/forms/d/e/1FAIpQLSdTHyZQIgQhtGN_SC3xDgFJQoJI6SHq9fYt696U2JJbDfzqZg/viewform" target="_blank" rel="noreferrer noopener">
                                    <a className='name'>
                                        APPLY NOW
                                    </a>
                                    <img src={arrowRightYellow} className="arrow-icon"></img>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="background-shape"><div className="background-shape-inner"></div></div>
                </div>
            </div>
        </div>
    )

}

export default Documents;