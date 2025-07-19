import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm sticky-top py-2">
      <div className="container">
        {/* Logo + Animated Brand Text */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <i className="bi bi-shield-check text-primary fs-4"></i>
          <span className="animated-logo-text fw-bold text-uppercase">AASRA</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          {/* Nav Links */}
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 me-md-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adoptions">
                <i className="bi bi-heart me-1"></i>Adopt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rescues">
                <i className="bi bi-shield-check me-1"></i>Rescue
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shelters">
                <i className="bi bi-people me-1"></i>Shelters
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                <i className="bi bi-currency-dollar me-1"></i>Donate
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex gap-2 ms-auto mt-2 mt-md-0">
            <Link to="/login" className="btn btn-outline-primary btn-sm px-3">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm px-3 text-white">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
