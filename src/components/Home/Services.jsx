import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <section className="page-section bg-dark" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0" style={{ lineHeight: 0.5 }}>
                <span style={{ color: "#008ACF" }}>HADY</span>CLINIC <br />
                <span style={{ fontSize: 11 }}>
                  FOR PLASTIC SURGERY AND BURN
                </span>
              </h2>
              <h4 className="text-white mt-0">
                {/* <hr className="divider light my-4" /> */}
                <hr className="divider my-4" />
                Specialized In Plastic Surgerys And Burn Treatment
              </h4>
              <p className="text-white mb-4">
                With more than 30 years of experience in healthcare consulting
                and operations in the plastic and burn field, Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ut ad ipsam minus, dolor
                facilis magnam reiciendis minima incidunt nemo nisi suscipit
                facere quia id deleniti quaerat aut quae? Iure aliquam et odit
                placeat harum, quisquam fugiat, tempore vitae repudiandae,
                voluptas ullam excepturi quae laudantium! Exercitationem animi
                odio fugiat excepturi explicabo!
              </p>
              <a
                className="btn btn-info btn-xl js-scroll-trigger"
                href="/about"
              >
                About Us
              </a>
              <br />
              <br />
              <div className="social-icons">
                <a
                  className="social-icon"
                  href="https://www.facebook.com/hadyclinicnet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://www.instagram.com/hadyclinicnet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/in/mohamed-abdelhady-4a8a73185"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="social-icon"
                  href="mailto:drhady@hadyclinic.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-envelope"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://www.youtube.com/channel/UCHPNtyF-s-ljdShfLhJ3xIw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
