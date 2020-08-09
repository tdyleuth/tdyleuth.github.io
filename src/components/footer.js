import React from "react";

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="twelve columns">
                    <ul className="social-links">
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

                    <ul className="copyright">
                        <li>&copy; Tony Dyleuth 2020</li>
                    </ul>
                </div>

                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                    >
                        <i className="icon-up-open" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;