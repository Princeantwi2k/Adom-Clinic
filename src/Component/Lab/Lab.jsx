import React from "react";
import labpic from "../../image/lap.jpg";
import "./Lab.css";

const Lab = () => {
  return (
    <div>
      <h1 className="lab">Adom Lab</h1>
      <p className="lab-para">
        The primary goal of AdomLab is to provide superior pathology-related
        services to both healthcare practitioners and their patients. We achieve
        this through high standards of professionalism, quality of service and
        innovation. Our staff are well-qualified and benefit from continued
        professional training, assuring clients of the highest standards of
        quality.
      </p>
      <p className="lab-para">
        AdomLab automated analyzers are supplied and regularly maintained by
        both local and international companies. We use data-processing systems
        to ensure that reports are delivered to clients on time.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <p className="lab-para">Our services include but not limited to:</p>
            <ul>
              <li className="lab-lists">
                Haematology (routine and specialist labs)
              </li>
              <li className="lab-lists">
                Chemical Pathology (routine and specialist lab
              </li>
              <li className="lab-lists">
                Molecular Laboratory Techniques (PCR): Tuberculosis(IGRA), HPV,
                HIV viral load, Gonorrhea and Chlamydia testing
              </li>
              <li className="lab-lists">
                Immunology: Tumour Markers, Fertility screening and Hepatitis A
                and B screening
              </li>
              <li className="lab-lists">Serological Testing</li>
              <li className="lab-lists">Bacteriology Lab</li>
              <li className="lab-lists">TB Lab</li>
              <li className="lab-lists">
                Mobile Phlebotomy: Experience our services in the privacy of
                your home or office and at your convenience.
              </li>
              <li className="lab-lists">
                Preventive Medicine (Executive Wellness screening)
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <img src={labpic} alt="lab" className="lab-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
