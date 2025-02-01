import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className=" navbar navbar-expand-sm bg-light mb-1">
        <div className=" container-fluid">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link px-3 nav-links "
                style={{ color: "orange" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link px-3 nav-links"
                style={{ color: "orange" }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
