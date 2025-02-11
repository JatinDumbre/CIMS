import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IPNavbar from "./IPNavbar";
import Footer from "../Admin/Footer";

const AllProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  let count = 0;

  useEffect(() => {
    fetch("http://localhost:8030/ipmanager/allprojects")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setProjects(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="bg-primary-subtle">
      <IPNavbar />
      <div className="container">
        <div className="locTable ">
          <h3 className="text-center mb-3">All Projects</h3>
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col ">Sr No</th>
                <th scope="col">Project Name</th>
                <th scope="col">Location Address</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => {
                count++;
                return (
                  <tr className="text-center" key={project.projectId}>
                    <td>{count}</td>
                    <td>{project.projectName}</td>
                    <td>{project.locationName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center pt-1 pb-3">
          {/* <div className="p-3 pb-2 w-10">
          <button
            className="btn btn-success w-100"
            type="button"
            onClick={() => navigate("/addProject")}
          >
            Add Project
          </button>
        </div> */}
          <div className="p-3 pb-2 w-10">
            <button
              type="button"
              className="btn btn-warning w-100"
              onClick={() => navigate("/ipmanager")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
