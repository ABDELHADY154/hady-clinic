import React, { Component } from "react";

export default class Masthead extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white">
                {/* <span style={{ color: "#008ACF" }}>HADY</span>CLINIC
                <br /> */}
                <span>Doctor</span>
                ABDELHADY ELSHAMY
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5" style={{ color: "white" }}>
                CONSULTANT PLASTIC SURGEON <br /> FELLOW OF SHEFFIELD HALLAM
                UNIVERSITY, ENGLAND
              </p>
              <a
                className="btn btn-info btn-xl js-scroll-trigger"
                href="#about"
              >
                Make an appointment
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
