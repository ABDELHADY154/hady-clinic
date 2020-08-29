import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
  render() {
    return (
      <section className="page-section bg-dark" id="about">
        <div className="container">
          <h2 className="text-center mt-0 text-white">Our Location</h2>
          <hr className="divider my-4" />
          <div className="row justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13646.526906160778!2d29.9492206!3d31.2309309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6fa22645fa8c67d1!2zSEFEWUNMSU5JQyBGT1IgUExBU1RJQyBTVVJHRVJZIEFORCBCVVJOIC7Zh9in2K_ZitmD2YTZitmG2YrZgy4uLtin2YTYudmK2KfYr9ipINin2YTYqtiu2LXYtdmK2Kkg2YTYrNix2KfYrdipINin2YTYqtis2YXZitmEINmIINin2YTYrdix2YjZgg!5e0!3m2!1sen!2seg!4v1598042575759!5m2!1sen!2seg"
              width="1800"
              height="400"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title="map"
              className="w-75"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}
