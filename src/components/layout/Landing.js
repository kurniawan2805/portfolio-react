import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./Landing.scss";

export class Landing extends Component {
  render() {
    const style = {};
    return (
      <React.Fragment>
        <div className="jumbotron mb-0">
          <h1 className="display-4 jumbotron-title">Hi, I am Adi!</h1>
          <p className="lead jumbotron-subtitle">
            Electronics Engineer | Front End Developer
          </p>
          <div className="contact">
            <a
              href="https://github.com/kurniawan2805/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" style={style} />
            </a>
            <a
              href="mailto:kurniawan2805@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope" style={style} />
            </a>
            <a
              href="https://twitter.com/kurniawan2805"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" style={style} />
            </a>
            <a
              href="https://www.linkedin.com/in/kurniawan2805/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" style={style} />
            </a>
            <a
              href="https://www.freecodecamp.org/kurniawan2805"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-free-code-camp" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
