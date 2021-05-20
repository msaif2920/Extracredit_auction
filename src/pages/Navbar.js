/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
function Navbar(props) {
  const token = window.localStorage.getItem("Bearer");
  const history = useHistory();
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            SHOP APP
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-start"></div>

          {token ? (
            <div className="navbar-end">
              <a className="navbar-item" href="/">
                Search
              </a>
              <a className="navbar-item" href="/createListing">
                Create Listing
              </a>
              <a
                className="navbar-item"
                onClick={(e) => {
                  localStorage.removeItem("Bearer");
                  props.onLogOut("");
                }}
              >
                Logout
              </a>
            </div>
          ) : (
            <div className="navbar-end">
              <a className="navbar-item" href="/">
                Login
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
