import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          // style={{ backgroundColor: "black" }}
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">
              <span style={{ color: "#008ACF" }}>HADY</span>CLINIC
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link js-scroll-trigger">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link js-scroll-trigger">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link js-scroll-trigger">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link js-scroll-trigger">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
