import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";

import "./About.scss";
import pic from "../../img/adi2.png";

export class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <h1 className="section-title">About Me</h1>
        <div className="container about__wrapper">
          <img className="about__image" src={pic} alt={"hi! This is Adi"} />
          <div className="about__label">
            <p>
              Hi! My name is Adi Kurniawan. You can call me Adi. Now, I live in
              Bandung. I am an Electronics Engineer. I have good experience in
              design electronics system on microcontroller, espesially based on
              Arduino. I am not an artist or designer, but occassionally, I like
              to improve my creativity by playing with Inkscape to design a logo
              or poster. I found great passion to learn more about Front End
              Development. I am considered myself as a new developer so be nice
              with me :D. Let's get connected.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
