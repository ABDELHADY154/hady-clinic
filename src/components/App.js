import React, { Component, Fragment } from "react";
import NavBar from "./Common/Nav";
import "../components/App.css";
import Footer from "./Common/Footer";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Footer />
      </Fragment>
    );
  }
}
