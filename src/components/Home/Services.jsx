import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <section className="page-section bg-dark" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">
                <span style={{ color: "#008ACF" }}>HADY</span>CLINIC
                <br />
                <hr className="divider light my-4" />
                We Specialize In Plastic surgerys and Burn treatment
              </h2>
              {/* <hr className="divider light my-4" /> */}
              <p className="text-white mb-4">
                With more than 30 years of experience in healthcare consulting
                and operations in the plastic and burn field
              </p>
              <a
                className="btn btn-info btn-xl js-scroll-trigger"
                href="#services"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
