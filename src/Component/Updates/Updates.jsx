import React from "react";
import safe from "../../image/safe.jpg";
import corona from "../../image/corona.jpg";
import "./Updates.css";

const Updates = () => {
  return (
    <div>
      <section className="latest-updates">
        <h1 style={{ textAlign: `center`, paddingTop: `20px` }}>
          Latest <span style={{ color: `white` }}>Updates</span>
        </h1>
        <div className="row ">
          <div className="col-xs-12 col-sm-12 col-md-5 ">
            <img src={safe} alt="news" className="update" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-7">
            <h4 style={{ color: `white` }}>
              Tips on how to stay safe this Easter Season
            </h4>
            <p style={{ color: `white`, padding: `20px` }}>
              Last updated Posted on
              <span style={{ color: "red" }}> july 10, 2021</span>{" "}
            </p>
            <p style={{ color: `white`, padding: `20px` }}>
              Wash your hands often with soap and water for at least 20 seconds,
              especially after being in a public place, or after blowing your
              nose, coughing or sneezing. If soap and water are not readily
              available, use a hand sanitizer with at least 60% alcohol.\ Avoid
              touching your eyes, nose and mouth with unwashed hands.hands […]
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-5 ">
            <img src={corona} alt="news" className="updates" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-7 ">
            <h4 style={{ color: `white` }}>
              Managing Side Effects of COVID-19 Vaccine
            </h4>
            <p
              style={{ color: `white`, padding: `20px` }}
              className="para-update"
            >
              Last updated Posted on
              <span style={{ color: "red" }}> july 10, 2021</span>{" "}
            </p>
            <p style={{ color: `white`, padding: `20px` }}>
              COVID-19 vaccination will help protect you from getting COVID-19.
              You may have some side effects, which are normal signs that your
              body is building protection
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Updates;
