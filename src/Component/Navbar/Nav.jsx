import React from "react";
import { NavLink } from "react-router-dom";

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
              <h1 className="title">Adom Clinic</h1>
            </div>

            <ul class="nav navbar-nav navbar-right">
              <NavLink
                to="/"
                className="main-nav"
                activeClassName="main-nav-active"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className="main-nav"
                activeClassName="main-nav-active"
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                to="/service"
                className="main-nav"
                activeClassName="main-nav-active"
              >
                <li class="dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Service <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <NavLink
                      to="/scan"
                      className="main"
                      activeClassName="main-nav-active"
                    >
                      <li>Scan</li>
                    </NavLink>
                    <NavLink
                      to="/lab"
                      className="main"
                      activeClassName="main-nav-active"
                    >
                      <li>laboratory</li>
                    </NavLink>
                    <NavLink
                      to="/health"
                      className="main"
                      activeClassName="main-nav-active"
                    >
                      <li>Health </li>
                    </NavLink>
                  </ul>
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className="main-nav"
                activeClassName="main-nav-active"
              >
                <li>contact</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
