import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import resumeData from "./resumeData";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header resumeData={resumeData} />
                <About resumeData={resumeData} />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        );
    }
}
export default App;
