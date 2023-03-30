import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ user }) {
  const handleLogout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  return (
    <div className="navbar navbar-expand-lg home-nav">
      {user ? (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{
            flexGrow: 0,
          }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link className="link" to="/signin">
          Sign In
        </Link>
      )}

      <Link className="link" to="/poodals">
        Poodals
      </Link>
      {user ? (
        <>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav2"
            aria-controls="navbarNav2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav2" style={{flexGrow:0,}}>
        <ul className="navbar-nav right-list">
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout" onClick={handleLogout}>
              logout
            </Link>
          </li>
        </ul>
        </div>
        </>
      ) : (
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      )}
    </div>
  );
}

export default Navbar;
