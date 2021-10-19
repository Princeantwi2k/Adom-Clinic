import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="container-fluid ">
      <nav className="navbar navbar-default navbar-fixed-top navbar-home">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed toggles "
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <h1>Adom clinic</h1>
        </div>

        <div
          className="collapse navbar-collapse nav-button"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right nav-button">
            <li>
              <Link to="/" className="link js-scroll-trigger">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link js-scroll-trigger">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/lab" className="link js-scroll-trigger">
                Lab
              </Link>
            </li>
            <li>
              <Link to="/health" className="link js-scroll-trigger">
                Health
              </Link>
            </li>
            <li>
              <Link to="/scan" className="link js-scroll-trigger">
                Scan
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link js-scroll-trigger">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
