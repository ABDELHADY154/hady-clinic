import React, { Component } from "react";
import IMG from "../Assets/img/home.jpg";

export default class Gallery extends Component {
  render() {
    return (
      <section className="page-section" id="gallary">
        <div className="container">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider my-4" />
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={IMG} alt="First slide" />
                <div class="carousel-caption d-none d-md-block bg-dark rounded-pill">
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem repellat sint molestias nisi unde quae architecto
                    quisquam eaque, rerum nihil voluptatem non, consequatur
                    voluptatum modi repudiandae magnam animi est temporibus?
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={IMG} alt="Second slide" />
                <div class="carousel-caption d-none d-md-block bg-dark rounded-pill">
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem repellat sint molestias nisi unde quae architecto
                    quisquam eaque, rerum nihil voluptatem non, consequatur
                    voluptatum modi repudiandae magnam animi est temporibus?
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={IMG} alt="Third slide" />
                <div class="carousel-caption d-none d-md-block bg-dark rounded-pill">
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem repellat sint molestias nisi unde quae architecto
                    quisquam eaque, rerum nihil voluptatem non, consequatur
                    voluptatum modi repudiandae magnam animi est temporibus?
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
