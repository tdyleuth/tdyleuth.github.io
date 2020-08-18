import React, { useState } from "react";

function RightNav() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const displayMobileMenu = () => {
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
    };

    return <div className="navbar">{open ? displayMobileMenu() : null}</div>;
}

export default RightNav;
