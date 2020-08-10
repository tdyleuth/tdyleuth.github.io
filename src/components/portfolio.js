import React from "react";

function Portfolio() {
    return (
        <section id="portfolio">
            <div>
                <h1>What I've Done</h1>
                <p>(More work to come!)</p>
                {/* portfolio-wrapper */}
                <div className="portfolio-container">
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-01">
                                <img
                                    className="img-screens"
                                    alt=""
                                    src="./images/screens/whack-a-virus-sc.png"
                                />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Whack-A-Virus</h5>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <i className="icon-plus" />
                                </div>
                            </a>
                        </div>
                    </div>{" "}
                    {/* item end */}
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-02">
                                <img
                                    className="img-screens"
                                    alt=""
                                    src="./images/screens/the-news-sc.png"
                                />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>The News</h5>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <i className="icon-plus" />
                                </div>
                            </a>
                        </div>
                    </div>{" "}
                    {/* item end */}
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-03">
                                <img
                                    className="img-screens"
                                    alt=""
                                    src="./images/screens/the-great-linkerator-sc.png"
                                />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>The Great Linkerator</h5>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <i className="icon-plus" />
                                </div>
                            </a>
                        </div>
                    </div>{" "}
                    {/* item end */}
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-04">
                                <img
                                    className="img-screens"
                                    alt=""
                                    src="./images/screens/shop-ez-sc.png"
                                />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Shop Ez</h5>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <i className="icon-plus" />
                                </div>
                            </a>
                        </div>
                    </div>{" "}
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-06">
                                <img
                                    className="img-screens"
                                    alt=""
                                    src="./images/screens/retro-draw-sc.png"
                                />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Retro Draw</h5>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <i className="icon-plus" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-05">
                                <img
                                    className="img-screens"
                                    alt=""
                                    src="./images/screens/to-do-app-sc.png"
                                />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>To Do App</h5>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <i className="icon-plus" />
                                </div>
                            </a>
                        </div>

                        {/* item end */}
                    </div>{" "}
                    {/* portfolio-wrapper end */}
                </div>{" "}
                {/* twelve columns end */}
                {/* Modal Popup
     --------------------------------------------------------------- */}
                <div id="modal-01" className="popup-modal mfp-hide">
                    <img
                        className="scale-with-grid"
                        src="./images/screens/whack-a-virus-sc.png"
                        alt=""
                    />
                    <div className="description-box">
                        <h4>Whack-A-Virus</h4>
                        <p>
                            Whack-A-Virus is my first attempt at creating a
                            javascript game based on the classic whack-a-mole
                            game. The game is mainly coded in jquery and vanilla
                            javascript.
                        </p>
                    </div>
                    <div className="link-box">
                        <p>
                            <a
                                className="site-link"
                                href="https://loving-bhabha-f96533.netlify.app/"
                                target="blank"
                            >
                                Visit Site
                            </a>

                            <a
                                href="https://loving-bhabha-f96533.netlify.app/"
                                target="blank"
                            >
                                View Source
                            </a>
                        </p>
                    </div>
                </div>
                {/* modal-01 End */}
                <div id="modal-02" className="popup-modal mfp-hide">
                    <img
                        className="scale-with-grid"
                        src="images/screens/the-news-sc.png"
                        alt=""
                    />
                    <div className="description-box">
                        <h4>The News</h4>
                        <p>
                            The News is a search aggregator web application
                            allowing users to search the latest news by entering
                            keywords with optional category/language filtering.
                        </p>
                    </div>
                    <div className="link-box">
                        <a
                            className="site-link"
                            href="https://thenews.netlify.app/"
                            target="blank"
                        >
                            View Site
                        </a>
                        <a
                            href="https://github.com/tdyleuth/theNews"
                            target="blank"
                        >
                            View Source
                        </a>
                    </div>
                </div>
                {/* modal-02 End */}
                <div id="modal-03" className="popup-modal mfp-hide">
                    <img
                        className="scale-with-grid"
                        src="./images/screens/the-great-linkerator-sc.png"
                        alt=""
                    />
                    <div className="description-box">
                        <h4>The Great Linkerator</h4>
                        <p>
                            The Great Linkerator is a collaboration on a full
                            stack web application allowing users to bookmark
                            their favorite websites. This was on the first
                            appliocations to combine the back-end and front-end
                            using React.
                        </p>
                    </div>
                    <div className="link-box">
                        <a
                            className="site-link"
                            href="https://linkeratorthegreat.herokuapp.com/"
                            target="blank"
                        >
                            Visit Site
                        </a>
                        <a
                            href="https://github.com/tdyleuth/TheGreatLinkerator"
                            target="blank"
                        >
                            View Source
                        </a>
                    </div>
                </div>
                {/* modal-03 End */}
                <div id="modal-04" className="popup-modal mfp-hide">
                    <img
                        className="scale-with-grid"
                        src="./images/screens/shop-ez-sc.png"
                        alt=""
                    />
                    <div className="description-box">
                        <h4>Shop-EZ</h4>
                        <p>
                            Shop-EZ is a full stack e-commerce website
                            collaboration for my final project with Fullstack
                            Academy.
                        </p>
                    </div>
                    <div className="link-box">
                        <a
                            className="site-link"
                            href="https://grace-shopper-ez-shop.herokuapp.com/"
                            target="blank"
                        >
                            Visit Site
                        </a>
                        <a
                            href="https://github.com/Shop-EZ/Shop-EZ"
                            target="blank"
                        >
                            View Source
                        </a>
                    </div>
                </div>
                {/* modal-04 End */}
                <div id="modal-05" className="popup-modal mfp-hide">
                    <img
                        className="scale-with-grid"
                        src="./images/screens/to-do-app-sc.png"
                        alt=""
                    />
                    <div className="description-box">
                        <h4>To Do App</h4>
                        <p>
                            My first "To Do" application using jQuery and
                            vanilla JavaScript allowing users to create and
                            delete "To Do" items. A great intro into learning
                            about basic DOM manipulation.
                        </p>
                    </div>
                    <div className="link-box">
                        <a
                            className="site-link"
                            href="https://gifted-sinoussi-4ff286.netlify.app/"
                            target="blank"
                        >
                            View Site
                        </a>
                        <a href="https://gifted-sinoussi-4ff286.netlify.app/">
                            View Source
                        </a>
                    </div>
                </div>
                {/* modal-05 End */}
                <div id="modal-06" className="popup-modal mfp-hide">
                    <img
                        className="scale-with-grid"
                        src="./images/screens/retro-draw-sc.png"
                        alt=""
                    />
                    <div className="description-box">
                        <h4>Retro Draw</h4>
                        <p>
                            Retro Draw is a fun web application allowing users
                            to select colors from left-hand pallete and click to
                            fill the corresponding cells in the grid. One of my
                            first applications diving into Javascript and
                            jQuery.
                        </p>
                    </div>
                    <div className="link-box">
                        <a
                            className="site-link"
                            href="https://vibrant-poitras-548158.netlify.app/"
                            target="blank"
                        >
                            View Site
                        </a>
                        <a
                            href="https://vibrant-poitras-548158.netlify.app/"
                            target="blank"
                        >
                            View Source
                        </a>
                    </div>
                </div>
                {/* modal-06 End */}
            </div>
            {/* row End */}
        </section>
    );
}

export default Portfolio;
