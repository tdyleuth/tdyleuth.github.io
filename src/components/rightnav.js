import React, { useState } from "react";

function RightNav() {
    return (
        <ul id="right-nav">
            <li className="nav-link">
                <a className="smoothscroll" href="#about">
                    About
                </a>
            </li>
            <li className="nav-link">
                <a className="smoothscroll" href="#services">
                    What I do
                </a>
            </li>

            <li className="nav-link">
                <a className="smoothscroll" href="#portfolio">
                    Projects
                </a>
            </li>

            <li className="nav-link">
                <a className="smoothscroll" href="#contact">
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default RightNav;
