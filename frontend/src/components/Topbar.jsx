import "./Pages/Landingpage.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
const Topbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = authService.isAuthenticated();
  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar  shadow-sm sticky-top ">
      {/* your full navbar code here */}
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
            alt="logo"
            width="36"
            height="36"
          />
          <span className="fw-semibold fs-5">Moving Company</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link-custom active ">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-link-custom">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/prices" className="nav-link-custom" h>
                Prices
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link-custom">
                Contacts
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/dashboard/quickquote" className="nav-link-custom">
                Quick Quote
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              {isLoggedIn ? (
                <button
                  className="btn btn-outline-light px-4"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link className="btn btn-outline-light px-4" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
