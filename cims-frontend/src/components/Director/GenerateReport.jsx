import React, { useEffect, useState } from "react";
import DNavbar from "./DNavbar";
import Footer from "../Admin/Footer";

const GenerateReport = () => {
  const [reports, setReports] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    fetch("http://localhost:8030/ipmanager/projects")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const generate = async () => {
    if (!selectedProject) {
      alert("Please select a project!");
      return;
    }
    await fetch(
      `http://localhost:8030/transaction/Report/generate-report/${selectedProject}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setReports(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-primary-subtle">
      <DNavbar />
      <div style={{ height: "470px" }} className="container pb-5">
        <div className="btns-task">
          <label>Project Name:</label>
          <select
            onChange={(e) => setSelectedProject(e.target.value)}
            value={selectedProject}
          >
            <option value="">----Select one----</option>
            {projects.map((project) => (
              <option key={project.projectId} value={project.projectId}>
                {project.projectName}
              </option>
            ))}
          </select>
          <button onClick={generate} className="btn btn-success ms-2">
            Generate
          </button>
        </div>

        <div className="project-detail-table">
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col">Sr No</th>
                <th scope="col">Project Name</th>
                <th scope="col">Material Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit</th>
                <th scope="col">Location</th>
                <th scope="col">Site Operator</th>
                <th scope="col">Project Manager</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((repo, index) => (
                <tr className="text-center" key={index}>
                  <td>{index + 1}</td>
                  <td>{repo.projectName}</td>
                  <td>{repo.materialName}</td>
                  <td>{repo.quantity}</td>
                  <td>{repo.unitName}</td>
                  <td>{repo.locationName}</td>
                  <td>{repo.soName}</td>
                  <td>{repo.pmName}</td>
                  <td>{repo.status || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenerateReport;
