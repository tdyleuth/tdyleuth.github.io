import React from "react";

function About({ resumeData }) {
    return (
        <section id="about">
            <div className="about-container">
                <div className="profile-container">
                    <h1 className="about-header">About Me</h1>
                    <img
                        id="profile-pic"
                        src="./images/profilepic.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <p>
                        Hello! I'm Tony, a design-minded front-end software
                        engineer with full stack experience focused on building
                        beautiful interfaces & experiences.
                    </p>
                    <br></br>

                    <div className="about-detail-container">
                        <p className="about-email">
                            <span>
                                Get in touch:{" "}
                                <a href="mailto: tony.dyleuth@gmail.com">
                                    {resumeData.email}
                                </a>
                            </span>

                            <a
                                href="https://drive.google.com/file/d/1CsJgWGT6cimbU6xb_0vlh3Mbhnlga28o/view?usp=sharing"
                                target="_blank"
                                className="download-button"
                            >
                                <i className="fa fa-download" />
                                Download Resume
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
