// client/my_app/src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        📚 BBIT Lib
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
       
            <Link className="nav-link" to="/about">About</Link>
           <Link className="nav-link" to="/contact">Contact</Link>
           <Link className="nav-link" to="/services">Services</Link>
          <Link  className="nav-link" to="/register">Register</Link>
          <Link className="nav-link" to="/login">Login</Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
