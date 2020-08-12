import React, { Component } from "react";
// import logo from "../Assets/img/logo.jpg";

export default class About extends Component {
  render() {
    return (
      <header
        className="masthead"
        style={{ backgroundImage: "none", backgroundColor: "#8D837D" }}
      >
        {/* {console.log(window.location.pathname)} */}

        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-center">
              <h1 className="text-uppercase text-white">About</h1>
              <hr className="divider my-4" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
