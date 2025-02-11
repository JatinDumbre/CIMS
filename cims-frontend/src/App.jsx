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
import AddMaterialForm from "./components/SiteOperator/AddMaterialForm";
import UpdateProject from "./components/IPManager/UpdateProject";
import AboutPage from "./components/AboutPage";
import AddLocation from "./components/IPManager/AddLocation";
import UpdateMaterial from "./components/SiteOperator/UpdateMaterial";
import AllLocations from "./components/IPManager/AllLocations";
import AllProjects from "./components/IPManager/AllProjects";
import AddProject from "./components/IPManager/AddProject";
import AllEmployees from "./components/Director/AllEmployees";
import AllProjectss from "./components/Director/AllProjectss";
import Locations from "./components/Director/Locations";
import PMRequest from "./components/ProjectManager/PMRequest";
import AllRequests from "./components/SiteOperator/AllRequests";
import GenerateReport from "./components/Director/GenerateReport";
import AddMaterial from "./components/IPManager/AddMaterial";
import AllMaterials from "./components/IPManager/AllMaterials";
function App() {
  const mystate = useSelector((state) => state.logged);
  return (
    <div className="app-content">
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        <nav className=" navbar navbar-expand-sm bg-light mb-1">
          <div className=" container d-flex flex-row-reverse">
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
              {/* <li className="nav-item">
                <Link
                  to="/aboutPage"
                  className="nav-link px-3 nav-links "
                  style={{ color: "orange" }}
                >
                  About
                </Link>
              </li> */}
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
        <Route path="/requestMatToIP" element={<AddMaterialForm />} />
        <Route path="/updateProject" element={<UpdateProject />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/addLocation" element={<AddLocation />} />
        <Route path="/updateMaterial" element={<UpdateMaterial />} />
        <Route path="/allLocations" element={<AllLocations />} />
        <Route path="/allProjects" element={<AllProjects />} />
        <Route path="/addProject" element={<AddProject />} />
        <Route path="/allEmployees" element={<AllEmployees />} />
        <Route path="/allprojectss" element={<AllProjectss />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/requestMaterialToSiteOperator" element={<PMRequest />} />
        <Route path="/allRequests" element={<AllRequests />} />
        <Route path="/generateReports" element={<GenerateReport />} />
        <Route path="/addMaterials" element={<AddMaterial />} />
        <Route path="/allMaterials" element={<AllMaterials />} />
      </Routes>
    </div>
  );
}

export default App;
