import React, { useEffect } from "react";
import img from "../../image/img5.jpg";
import img1 from "../../image/us.jpg";
import img2 from "../../image/over.jpg";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";
import "./Team.css";
import Aos from "aos";

const Ourteam = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container day">
      <div className="row family">
        <h1 className="team">
          Our <span style={{ color: `blueviolet` }}>Team</span>
        </h1>
        <div className="team-line"></div>

        <div className="col-xs-12 col-sm-12 col-md-4 ">
          <div className="circle" data-aos="fade-down-right">
            <img src={img} alt="pic" className="teamimg" />
          </div>

          <h3 className="teamName"> Dr. Maya Nana Adjowa</h3>
          <div className="teamicon">
            <FaLinkedinIn style={{ margin: 5 }} />
            <FaWhatsapp style={{ margin: 5 }} />
            <FaTwitter style={{ margin: 5 }} />
            <FaFacebookMessenger style={{ margin: 5 }} />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4">
          <div className="circle" data-aos="flip-left">
            <img src={img1} alt="pic" className="teamimg" />
          </div>

          <h3 className="teamName"> Dr. Bilal Zakari</h3>
          <div className="teamicon">
            <FaLinkedinIn style={{ margin: 5 }} />
            <FaWhatsapp style={{ margin: 5 }} />
            <FaTwitter style={{ margin: 5 }} />
            <FaFacebookMessenger style={{ margin: 5 }} />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4">
          <div className="circle" data-aos="fade-down-left">
            <img src={img2} alt="pic" className="teamimg" />
          </div>

          <h3 className="teamName"> Dr. Yoshi Odei</h3>
          <div className="teamicon">
            <FaLinkedinIn style={{ margin: 5 }} />
            <FaWhatsapp style={{ margin: 5 }} />
            <FaTwitter style={{ margin: 5 }} />
            <FaFacebookMessenger style={{ margin: 5 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
