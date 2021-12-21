import React from "react";
import pic10 from "../../image/ceo.jpg";
import "./about.css";

const About = () => {
  return (
    <div>
      <h1 className="about">About Us</h1>
      <section>
        <div className="container-fliud aboutContent">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 content ">
              <p className="tex">
                The Adom Hospital was established in 1992 as a not-for-profit
                health facility to provide healthcare to SSNIT staff and their
                dependents.
              </p>
              <p className="tex">
                {" "}
                The facility was later upgraded into a full-fledge hospital to
                extend its services to the general public The Adom Hospital was
                incorporated in November, 2010 as The Adom Hospital Company
                Limited. We have three (3) Hospitals- The Adom Hospital, The
                Adom Specialist Hospital and The Adom Mother and Child Hospital
                and six (6) Satellite Clinics.
              </p>
              <p className="tex">
                The Adom Specialist Hospital located at Osu, Kuku Hill is a
                subsidiary of The Adom Hospital Company Limited. It became
                operational in September 2012. The major departments at this
                facility are Ophthalmology, Ear, Nose and Throat (ENT), Dental
                and Physiotherapy. There are two Theatres at this facility.
              </p>
              <p className="tex">
                The Adom Mother and Child Hospital, located at Troas Crescent in
                Osu has an ultra-modern facility that takes care of Obstetrics
                and Gynecological cases and Paediatrics
              </p>
              <p className="tex">
                The Adom Clinics are community based clinics with modern
                facilities and experienced health professionals. They are
                located at:
              </p>
              <ul>
                <li className="list">Adenta Shopping Mall</li>
                <li className="list">Dome, Dome Telecom</li>
                <li className="list">Dansoman, Opposite Baptist Academy</li>
                <li className="list">lapaz hightension</li>
                <li className="list">Pension House Ministries, Accra</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 Thumbnail">
              <h3 style={{ textAlign: `center`, paddingTop: `20px` }}>
                Our<span style={{ color: `blueviolet` }}> CEO</span>
              </h3>
              <img
                src={pic10}
                alt="CEO"
                className="picture"
                data-aos="zoom-in-left"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
