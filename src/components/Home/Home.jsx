import React, { Component, Fragment } from "react";
import Masthead from "./Masthead";
import Services from "./Services";
import Gallery from "./Gallery";
import SimpleMap from "./Map";
import Form from "./Form";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Masthead />
        <Services />
        <Gallery />
        <SimpleMap />
        <Form />
      </Fragment>
    );
  }
}
