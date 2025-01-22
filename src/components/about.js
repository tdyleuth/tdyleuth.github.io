import React from "react";

const About = ({ resumeData }) => {
    return (
        <section id='about'>
            <div className='about-container'>
                <div className='profile-container'>
                    <h1 className='about-header'>About Me</h1>
                    <img
                        id='profile-pic'
                        src='./images/profilepic.jpg'
                        alt=''
                    />
                </div>
                <div>
                    <p>
                    Hi! I’m Tony, a experienced Software Engineer currently based in Los Angeles, CA.
                    </p>
                    <br></br>

                    <div className='about-detail-container'>
                        <p className='about-email'>
                            <span>
                                Get in touch:{" "}
                                <a href='mailto: tony.dyleuth@gmail.com'>
                                    {resumeData.email}
                                </a>
                            </span>
                        </p>
                        <div id='button-container'>
                            <a
                                href='https://drive.google.com/file/d/1_9BRPt6peg9eTbw1QcUysAbEkE2ike6-/view?usp=drive_link'
                                target='blank'
                                className='download-button'
                            >
                                <i className='fa fa-download' />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
