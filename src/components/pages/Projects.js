import React, { Component } from "react";

import "./Projects.scss";
import Project from "./Project";

export class Projects extends Component {
  state = {
    projects: []
  };
  async componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/kurniawan2805/portfolio-react/master/src/components/projects/data.json";
    const data = await fetch(url);
    const jsonData = await data.json();

    this.setState({
      projects: jsonData.data
    });
  }

  render() {
    // console.log(this.state.project);
    const dataProject = this.state.projects.map(project => (
      <Project
        key={project.id}
        title={project.title}
        desc={project.desc}
        url={project.url}
        imgUrl={project.imgUrl}
      />
    ));
    return (
      <section className="projects">
        <h4 className="text-center">Some works I play with...</h4>
        <div className="container projects-wraper">{dataProject}</div>
      </section>
    );
  }
}

export default Projects;
