import React from "react";

function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-container'>
                <div className='twelve columns'>
                    <ul className='social-links'>
                        <li>
                            <a
                                href='https://drive.google.com/file/d/1lPPRg3bD2xblzNqoeeB6g2debgQv4TY7/view?usp=sharing'
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

                    <ul className='copyright'>
                        <li>&copy; Tony Dyleuth 2020</li>
                    </ul>
                </div>

                <div id='go-top'>
                    <a
                        className='smoothscroll'
                        title='Back to Top'
                        href='#home'
                    >
                        <i className='fa fa-arrow-up' aria-hidden='true'></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
