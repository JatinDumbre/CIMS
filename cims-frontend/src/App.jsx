import { Routes, Route, Link } from "react-router-dom";

import LoginForm from "./components/Auth/LoginForm";
import Home from "./components/Auth/Home";
import RegistrationForm from "./components/Admin/RegistrationForm";
import AdminHome from "./components/Admin/AdminHome";
import DirectorHome from "./components/Director/DirectorHome";
import IPManagerHome from "./components/IPManager/IPManagerHome";
import ProjectManagerHome from "./components/ProjectManager/ProjectManagerHome";
import SiteOperatorHome from "./components/SiteOperator/SiteOperatorHome";

import "./App.css";
import { useSelector } from "react-redux";
import LogoutComp from "./components/Auth/LogoutComp";
import UpdateForm from "./components/UpdateForm";
function App() {
  const mystate = useSelector((state) => state.logged);
  return (
    <div className="app-content">
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        <nav className=" navbar navbar-expand-sm bg-light mb-1">
          <div className=" container-fluid d-flex flex-row-reverse">
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
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/director" element={<DirectorHome />} />
        <Route path="/ipmanager" element={<IPManagerHome />} />
        <Route path="/projectmanager" element={<ProjectManagerHome />} />
        <Route path="/siteoperator" element={<SiteOperatorHome />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/logout" element={<LogoutComp />} />
        <Route path="/update" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
