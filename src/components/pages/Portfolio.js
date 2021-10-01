import React, { Component } from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";

import IntroSection from "../IntroSection";
import { Element, scroller } from "react-scroll";

class Portfolio extends Component {
  componentDidMount() {
    window.setTimeout(() => {
      document.getElementById("portfolio-a-link").click();
    });
  }

  scrollTo() {
    scroller.scrollTo("portfolio_start", {
      duration: 2000,
      delay: 100,
      smooth: true,
      offSet: 50,
    });
  }
  render() {
    return (
      <div>
        <a onClick={this.scrollTo} id="portfolio-a-link" />
        <IntroSection />
        <Element name="portfolio_start">
          <Cards />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
