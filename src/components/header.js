import React from "react";

function Header({ resumeData }) {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a href="http://tdyleuth.github.io/" className="navbar-brand">
                    TD
                </a>

                <ul id="nav" className="nav">
                    <li>
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#services">
                            What I do
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="header-name">
                        <span>{resumeData.name}</span>
                    </h1>
                    <h2 className="header-role">{resumeData.role}</h2>

                    <hr />
                    <ul className="social">
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1CsJgWGT6cimbU6xb_0vlh3Mbhnlga28o/view?usp=sharing"
                                target="blank"
                            >
                                <i className="fa fa-file" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/tdyleuth/"
                                target="blank"
                            >
                                <i className="fa fa-linkedin" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/tdyleuth"
                                target="blank"
                            >
                                <i className="fa fa-github" />
                            </a>
                        </li>

                        <li>
                            <a href="mailto:tony.dyleuth@gmail.com">
                                <i className="fa fa-envelope" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle" />
                </a>
            </p>
        </header>
    );
}

export default Header;
