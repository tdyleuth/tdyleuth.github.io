import React from "react";
import Navbar from "./Navbar.js";

function Header({ resumeData }) {
    return (
        <header id='home'>
            <Navbar />

            <div className='row banner animate-pop-in'>
                <div className='banner-text'>
                    <h1 className='header-name animate-pop-in'>
                        <span>{resumeData.name}</span>
                    </h1>
                    <h2 className='header-role animate-pop-in'>
                        {resumeData.role}
                    </h2>

                    <hr />
                    <ul className='social animate-pop-in'>
                        <li>
                            <a
                                href='https://drive.google.com/file/d/1_9BRPt6peg9eTbw1QcUysAbEkE2ike6-/view?usp=drive_link'
                                target='blank'
                            >
                                <i className='fa fa-file fa-lg' />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.linkedin.com/in/tdyleuth/'
                                target='blank'
                            >
                                <i className='fa fa-linkedin fa-lg' />
                            </a>
                        </li>

                        <li>
                            <a
                                href='https://github.com/tdyleuth'
                                target='blank'
                            >
                                <i className='fa fa-github fa-lg' />
                            </a>
                        </li>

                        <li>
                            <a href='mailto:tony.dyleuth@gmail.com'>
                                <i className='fa fa-envelope fa-lg' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='scrolldown'>
                <a className='smoothscroll' href='#about'>
                    <i className='icon-down-circle' />
                </a>
            </p>
        </header>
    );
}

export default Header;
