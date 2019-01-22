import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Navbar.scss";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Adi's Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav m-0 p-0">
            {/* <li class="nav-item">
              <Link class="nav-link " to="/">
                Home <span class="sr-only ">(current)</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link " to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="https://designwire.co/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
