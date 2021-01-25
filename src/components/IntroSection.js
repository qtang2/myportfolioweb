import React, { Component } from "react";
import { Button } from "./Button";
import "./IntroSection.css";
import "../App.css";
import { Link } from "react-router-dom";

class IntroSection extends Component {
  render() {
    return (
      <div className="intro-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>Qian Tang</h1>
        <p className="intro-para">qianxtang@gmail.com</p>
        <p className="intro-para">
          I am seeking a position as a Front End Developer.
        </p>
        <p className="intro-para">
          My front end skills include JavaScript,React, React Native, HTML5, CSS, JQuery and back end skills include , Node.js, Express, REST API, JSON, MySQL/Firebase/MongoDB+Mongoose. And I am familiar with development tools like GitHub, VS Code, ATOM, Eclipse.
        </p>{" "}
        <p className="intro-para">
          I am looking forward to apply all my skills to make values.
        </p>{" "}
        <div className="btns-container">
          <Button
            className="btns"
            buttonStyle="btn-primary"
            buttonSize="btn-large"
            linkTo="/resume"
          >
            More about Me
          </Button>
          <Button
            className="btns"
            buttonStyle="btn-primary"
            buttonSize="btn-large"
            linkTo="/contact"
          >
            Contact Me
          </Button>
        </div>
        <div className="social-icons">
          <a
            className="social-icon-link facebook"
            href="https://www.facebook.com/profile.php?id=100015576962274"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>

          <a
            className="social-icon-link linkedin"
            href="https://www.linkedin.com/in/qian-tang-ict/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            className="social-icon-link github"
            href="https://github.com/qtang2"
            target="_blank"
            aria-label="Github"
          >
            <i className="fab fa-github" />
          </a>
        </div>
        <div className="download-container">
          <Link
            to="/files/QianTang-resume.pdf"
            target="_blank"
            download
            className="download-link"
          >
            Download Resume
            <i className="fas fa-download" />
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroSection;
