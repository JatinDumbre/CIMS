import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";

function App() {
  const mystate = useSelector((state) => state.logged);

  return (
    <div className="app-content">
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        {/* <nav className=" navbar navbar-expand-sm bg-light mb-3">
          <div className=" container-fluid">
            <ul className="navbar-nav ">
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
        </nav> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
