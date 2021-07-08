import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2021",
    };
  }

  render() {
    return (
      <div>
        <footer className="foot">
          <div className="row ">
            <div className="col-xm-12 col-sm-6 col-md-1"></div>
            <div className="col-xm-12 col-sm-6 col-md-3">
              <div className="log">ADOM CLINIC</div>
              <p className="parah"> Inspiring Better Health </p>
              <p className="para">phone: +233572211378</p>
              <p className="para">
                email:<a className="email">antwi2k@gmail.com </a>
              </p>
            </div>
          </div>

          <p className="para">&copy; 2021 All Rights Reserved, Adom Clinic.</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
