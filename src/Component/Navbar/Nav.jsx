import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-default nav-head">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">
                Brand
              </a>
            </div>

            <ul class="nav navbar-nav navbar-right">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link>
                <li class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Service <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <Link>
                      <li>vaccination</li>
                    </Link>
                    <Link>
                      <li>laboratory</li>
                    </Link>
                    <Link to="">
                      <li>Something </li>
                    </Link>
                  </ul>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a href="#">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
