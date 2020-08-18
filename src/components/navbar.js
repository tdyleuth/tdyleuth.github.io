import React from "react";

function Navbar() {
    return (
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
                {/* <li>
                    <button className="burger-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navbar;
