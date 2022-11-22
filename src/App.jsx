import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

const App = () => {
    return (
        <div className='App'>
            <Header resumeData={resumeData} />
            <About resumeData={resumeData} />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

