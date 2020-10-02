import React from "react";

function About({ resumeData }) {
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
                        Hello! I'm Tony, a design-minded front-end software
                        engineer with full stack experience focused on building
                        beautiful interfaces & experiences.
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
                                href='https://drive.google.com/file/d/14whjaAtMUNDd1hFUocb0wfSsbSNNJ31b/view?usp=sharing'
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

export default About;
