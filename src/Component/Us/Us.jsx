import React from "react";
import pic5 from "../../image/nurse 8.jpg";
import "./Us.css";

const Us = () => {
  return (
    <>
      <div className="container-fluid us">
        <h2 className="topic"> Us</h2>
        <div className="row aboutUs">
          <div className="col-xs-12 col-sm-12 col-md-6 ">
            <img src={pic5} alt="us" className="Usimg" data-aos="flip-down" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 ">
            <div className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              ab? Animi cumque, pariatur, voluptas earum similique eveniet dolor
              tempora odit iusto atque necessitatibus eos, illo perferendis iure
              adipisci ut. Sapiente.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Us;
