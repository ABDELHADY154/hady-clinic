import React, { Component, Fragment } from "react";
import Masthead from "./Masthead";
import Services from "./Services";
// import logo from "../Assets/img/logo.jpg";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Masthead />
        <Services />
      </Fragment>
    );
  }
}
