import React from "react";

function Navbar() {
    return (
        <nav id="nav-wrap">
            <div className="mobile-container">
                <div>
                    <a
                        href="http://tdyleuth.github.io/"
                        className="navbar-brand"
                    >
                        TD
                    </a>
                </div>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>

            <ul className="nav-links ">
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
    );
}

export default Navbar;
