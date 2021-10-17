import React from "react";
import scanpic from "../../image/nurse 5.jpg";
import "./Scan.css";

const Scan = () => {
  return (
    <div id="scan">
      <h1 className="scan">Adom Scan</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <p className="scan-para">
              Adom Clinic operates its own Medical Imaging Centre, with current
              advanced capabilities on offer including:
            </p>
            <ul className="scan-list">
              <li>64-SLICE CT SCAN</li>
              <li>DIGITAL X-RAY</li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <img src={scanpic} alt="pic" className="scan-pic" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-8  scans">
            <h2 className="doppler">64-SLICE CT SCAN</h2>
            <p>
              Our VCT light-speed 64-slice CT scanner is the fastest available
              and gives 3D colour images with greater definition than has been
              available in the past, and can therefore be used for cardiac
              studies including angiography, full body scanning (preventive
              screening) and virtual colonoscopy in addition to regular CT
              scanning.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-8 scans">
            <h2 className="doppler">4D COLOUR DOPPLER ULTRASOUND</h2>
            <p>
              An Ultrasound scan involves taking pictures of the body using high
              frequency sound waves. Since ultrasound technology uses sound
              waves instead of ionizing radiation, there is no risk of over
              exposure to radiation and is extremely safe for the patient.
              Ultrasound can be used for routine examinations of the body, as
              part of wellness checkups or preventive screening.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
