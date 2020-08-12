import React from "react";
import Navbar from "../components/navbar.js";

function Header({ resumeData }) {
    return (
        <header id="home">
            <Navbar />

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
