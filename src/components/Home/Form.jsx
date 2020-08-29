import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="about">
        <div className="container">
          <h2 className="text-center mt-0">Make an appointment</h2>
          <hr className="divider my-4" />
          <div className="row justify-content-center">
            <form className="w-75">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="phone number"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Comment</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-info btn-xl js-scroll-trigger"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
