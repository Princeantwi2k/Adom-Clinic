import React from "react";
import icon from "../../image/icon.png";
import icon1 from "../../image/icon2.png";
import icon2 from "../../image/icon3.png";
import "./OurService.css";

const OurService = () => {
  return (
    <div>
      <div className="row">
        <div className=" col-xs-6 col-sm-6 col-md-12">
          <h1 className="head-tags">
            OUR <span style={{ color: `blueviolet` }}>SERVICES</span>{" "}
          </h1>
          <div className="icon-line"></div>
          <p className="head-tags">
            Adom Clinic offers a wide range of services to suit your needs
          </p>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-1"></div>
        <div className=" col-xs-6 col-sm-6 col-md-3 icon">
          <img src={icon} alt="icon" className="icon-img" />
          <h4 className="icon-lebel"> Specialist Consultations</h4>
          <button className="btn btn-danger buttom"> Learn more</button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 icon">
          <img src={icon1} alt="icon" className="icon-img" />
          <h4 className="icon-lebel">Immigration Medicals</h4>
          <button className="btn btn-danger buttom"> Learn more</button>
        </div>
        <div className="  col-xs-6 col-sm-6 col-md-3 icon">
          <img src={icon2} alt="icon" className="icon-img" />
          <h4 className="icon-lebel"> AkaiLab - Laboratory</h4>
          <button className="btn btn-danger buttom" href="#scan">
            {" "}
            Learn more
          </button>
        </div>
        <div className="  col-xs-6 col-sm-6 col-md-1"></div>
      </div>
    </div>
  );
};

export default OurService;
