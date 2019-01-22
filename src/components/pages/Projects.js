import React, { Component } from "react";

import "./Projects.scss";

export class Projects extends Component {
  state = {
    project: []
  };
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <img
            className="card-img-top"
            src={require("../../img/ac.png")}
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
