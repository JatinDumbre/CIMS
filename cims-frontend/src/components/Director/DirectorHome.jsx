import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Admin/Footer";
import DNavbar from "./DNavbar";

const DirectorHome = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  const [userData, setUserData] = useState({});
  const [materials, setMaterials] = useState([]);
  let count = 0;

  useEffect(() => {
    fetch("http://localhost:8032/getUser/" + userid)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  return (
    <div className="bg-primary-subtle" style={{ height: "100%" }}>
      <DNavbar />
      <div className="container">
        <div className="rounded userMessage text-center mt-5 me-5 ms-5 mb-4 p-3  bg-light">
          <h2>Welcome {userData.fname}</h2>
        </div>

        <div className="container text-center">
          <div className="row ">
            <div
              className="col h-100 d-inline-block"
              style={{ width: "120px" }}
            >
              <Link className="h" to="/allprojectss">
                All Projects
              </Link>
            </div>
            <div className="col">
              <Link to="/allEmployees">All Employees</Link>
            </div>
            <div className="col">
              <Link to="/locations">All Locations</Link>
            </div>
            {/* <div className="col">Project</div> */}
          </div>
        </div>

        <div className="mTable "></div>
      </div>
      <Footer />
    </div>
  );
};

export default DirectorHome;
