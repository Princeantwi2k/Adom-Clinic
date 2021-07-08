import React from "react";
import "./Values.css";

const Values = () => {
  return (
    <div>
      <div className="row family">
        <h1 className="OurValue">Our Values</h1>
        <div className="value-line"></div>
        <div className="col-xm-12 col-sm-6 col-md-1"> </div>
        <div className="col-xm-12 col-sm-6 col-md-3 service">
          <i className="fa fa-medkit font" aria-hidden="true"></i>
          <h4 className="head-topic">Preventive Healthcare</h4>
          <div className="line"></div>
          <p className="pargraph">
            Adom Clinic values your health, so we encourage wellness at all
            times, not just when you’re sick. We offer services to support your
            healthy lifestyle, including healthy eating, exercise and good
            mental health.
          </p>
        </div>
        <div className="col-xm-12 col-sm-6 col-md-3 service">
          <i className="fa fa-id-card-o font" aria-hidden="true"></i>
          <h4 className="head-topic">Community Health Education</h4>
          <div className="line"></div>
          <p className="pargraph">
            Adom Clinic values our community. We support clinics in various
            low-income communities. We also organize health awareness events
            throughout the year.
          </p>
        </div>
        <div className="col-xm-12 col-sm-6 col-md-3 service">
          <i class=" font fa fa-female" aria-hidden="true"></i>
          <h4 className="head-topic">Family Health</h4>
          <div className="line"></div>
          <p className="pargraph">
            Adom Clinic values families, so we offer a range of services to keep
            your family healthy and happy at any age. Our family-friendly
            facilities and staff will put you and your loved ones at ease
          </p>
        </div>
        <div className="col-xm-12 col-sm-6 col-md-1"> </div>
      </div>
    </div>
  );
};

export default Values;
