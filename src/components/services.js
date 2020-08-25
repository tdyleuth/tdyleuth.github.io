import React from "react";

function Services() {
    return (
        <section id="services">
            <div className="section-overlay"></div>
            <h1 className="section-heading"> What I Do</h1>
            <div className="card-container">
                <div className="card" style={{ backgroundColor: "#e57373" }}>
                    <img
                        className="service-icons"
                        alt="Web Content"
                        src="./images/web-content.png"
                    />
                    <h2 className="service-heading">Front End</h2>
                    <p>HTML5</p>
                    <p>CSS | SASS</p>
                    <p>Javascript | jQuery</p>
                    <p>React</p>
                </div>
                <div className="card" style={{ backgroundColor: "#64b5f6" }}>
                    <img
                        className="service-icons"
                        alt="Web Content"
                        src="./images/server.png"
                    />
                    <h2 className="service-heading">Back End</h2>
                    <p>Node.js</p>
                    <p>Express</p>
                    <p>PostgreSQL</p>
                    <p>mySQL</p>
                </div>

                <div className="card" style={{ backgroundColor: "#64ffda" }}>
                    <img
                        className="service-icons"
                        alt="Web Content"
                        src="./images/network.png"
                    />
                    <h2 className="service-heading">Deployment</h2>

                    <p>System Design</p>
                    <p>Git</p>
                    <p>Webpack | Babel</p>
                    <p>Heroku</p>
                </div>
            </div>
        </section>
    );
}
export default Services;
