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
          I am seeking a position as a Front End Developer. My key skills including:
        </p>
        <br></br>
        <div className="skill-intro">
          <ul>
            <li>Basic Front End: JavaScript(ES6), HTML5, CSS3 </li>
            <li>Front End Framework: React + Redux, Vue + Vuex, JavaScript(ES6), JQuery, Boostrap</li>
            <li>Basic Back End Framework: Node.js, Express, REST API, JSON, MySQL/Firebase/MongoDB+Mongoose</li>
            <li>My development tools: GitHub, VS Code, ATOM, Eclipse</li>
          </ul>
          
        </div>
        <br></br>
        <p className="intro-para">
          I am looking forward to talking to you.
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
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>

          <a
            className="social-icon-link linkedin"
            href="https://www.linkedin.com/in/qian-tang-ict/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            className="social-icon-link github"
            href="https://github.com/qtang2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <i className="fab fa-github" />
          </a>
        </div>
        <div className="download-container">
          <Link
            to="/files/QianTang-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
