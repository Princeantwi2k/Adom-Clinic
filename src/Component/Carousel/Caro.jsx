import React from "react";
import pic from "../../image/nurse 2.jpg";
import pic1 from "../../image/doctors.jpg";
import pic2 from "../../image/nurse 4.jpg";
import pic3 from "../../image/nurse 6.jpg";
import "./Caro.css";

const Caro = () => {
  return (
    <div>
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner caro" role="listbox">
          <div className="item active pic">
            <img src={pic} alt="nurse" />
            <div className="carousel-caption text">
              <h1>we are always avaliable</h1>
              <button className="btn btn-primary btn-lg">About us</button>
            </div>
          </div>
          <div className="item">
            <img src={pic1} alt="nurse" />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img src={pic2} alt="nurse" className="img-responsive" />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img src={pic3} alt="nurse" />
            <div className="carousel-caption">...</div>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Caro;
