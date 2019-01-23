import React, { Component } from "react";

export class Project extends Component {
  render() {
    const { title, desc, imgUrl, url } = this.props;
    console.log(imgUrl);
    const cardStyleUrl = url
      ? "btn btn-primary"
      : "btn btn-secondary disabled ";
    return (
      <div className="card">
        <img className="card-img-top" src={imgUrl} alt="Card {title}" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={url} className={cardStyleUrl}>
            See Detail
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
