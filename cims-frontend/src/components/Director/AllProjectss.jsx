import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Admin/Footer";
import DNavbar from "./DNavbar";

const AllProjectss = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  let count = 0;
  useEffect(() => {
    fetch("http://localhost:8033/projectsbydirector")
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
    <div>
      <DNavbar />
      <div className="container">
        <div className="empTable ">
          <h3 className="text-center mb-3">All Projects</h3>
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col ">Sr No</th>
                <th scope="col">Project Name</th>
                <th scope="col">Location Name</th>
                <th scope="col">Location Address</th>
                <th scope="col">Location City</th>
                <th scope="col">Project Manager Id</th>
                <th scope="col">Site Operator Id</th>
                {/* <th scope="col">Location Id</th> */}
              </tr>
            </thead>
            <tbody>
              {projects.map((pro) => {
                count++;
                return (
                  <tr className="text-center" key={pro.projectId}>
                    <th>{count}</th>
                    <td>{pro.projectName}</td>
                    <td>{pro.locationName}</td>
                    <td>{pro.locationAddress}</td>
                    <td>{pro.locationCity}</td>
                    {/* <td>{pro.}</td> */}
                    <td>{pro.projectManager}</td>
                    <td>{pro.siteOperator}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center pt-1 pb-3">
          <div className="p-3 pb-2 w-10">
            <button
              type="button"
              className="btn btn-warning w-100"
              onClick={() => navigate("/director")}
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

export default AllProjectss;
