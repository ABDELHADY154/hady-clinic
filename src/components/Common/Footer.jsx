import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small bg-dark text-white">
        <div className="container">
          <div className="row text-center d-flex justify-content-center pt-5 mb-3">
            <h6 className="nav-item">
              <a href="/" className="nav-link js-scroll-trigger">
                Home
              </a>
            </h6>
            <h6 className="nav-item">
              <a href="/about" className="nav-link js-scroll-trigger">
                About
              </a>
            </h6>
            <h6 className="nav-item">
              <a href="/blog" className="nav-link js-scroll-trigger">
                Blog
              </a>
            </h6>
            <h6 className="nav-item">
              <a href="/contactus" className="nav-link js-scroll-trigger">
                Contact us
              </a>
            </h6>
          </div>
          <hr className="divider my-2" />
          <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
            <div className="col-md-8 col-12 mt-3">
              <h2 className="text-white mt-0" style={{ lineHeight: 0.5 }}>
                <span style={{ color: "#008ACF" }}>HADY</span>CLINIC <br />
                <span style={{ fontSize: 11 }}>
                  FOR PLASTIC SURGERY AND BURN
                </span>
              </h2>
            </div>
          </div>
          <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
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
                <i className="fas fa-envelope"></i>
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

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: <span style={{ color: "#008ACF" }}>HADY</span>CLINIC{" "}
        </div>
      </footer>
    );
  }
}
