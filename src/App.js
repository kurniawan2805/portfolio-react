import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
