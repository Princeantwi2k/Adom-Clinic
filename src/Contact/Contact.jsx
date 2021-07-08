import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h1>Contact Us</h1>
        <p>let's get in touch!</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <h1 className="mind">Contact</h1>
              <h5 className="dede">Call, Whats'app or send us an E-mail</h5>
            </div>
            <div className="col-md-6 blade">
              <h2>
                <i className="fa fa-phone" aria-hidden="true">
                  {" "}
                  (+233)5503001103{" "}
                </i>
              </h2>
              <h2>
                <i className="fa fa-whatsapp" aria-hidden="true">
                  {" "}
                  0572211378
                </i>
              </h2>
              <h2>
                <i className="fa fa-envelope-o" aria-hidden="true">
                  {" "}
                  antwi2k@gmail.com
                </i>
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-6">
              <h1 className="mind">Social</h1>
              <h5 className="dede">
                Follow us and stay updated with all our work and coming offers !
              </h5>
            </div>
            <div className="col-md-6 blade">
              <h2>
                <i className="fa fa-instagram " aria-hidden="true">
                  <a href="" className="contact-email">
                    {" "}
                    Qwajo monies{" "}
                  </a>
                </i>
              </h2>
              <h2>
                <i className="fa fa-twitter " aria-hidden="true">
                  <a href="" className="contact-email">
                    {" "}
                    Prince2k{" "}
                  </a>{" "}
                </i>
              </h2>
              <h2>
                <i className="fa fa-facebook " aria-hidden="true">
                  <a href="" className="contact-email">
                    {" "}
                    Qwajo monies{" "}
                  </a>
                </i>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
