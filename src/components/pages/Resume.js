import React, { Component } from "react";
import "../../App.css";
import ResumeCards from "../ResumeCards";
import Footer from "../Footer";
import IntroSection from "../IntroSection";
import { Element, scroller } from "react-scroll";

class Resume extends Component {
  componentDidMount() {
    window.setTimeout(() => {
      document.getElementById("a-link").click();
    });
  }

  scrollTo() {
    scroller.scrollTo("resume_start", {
      duration: 2000,
      delay: 100,
      smooth: true,
      offSet: 100,
    });
  }
  render() {
    return (
      <div>
        <a onClick={this.scrollTo} id="a-link"></a>
        <IntroSection />

        <Element name="resume_start">
          <ResumeCards />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default Resume;
