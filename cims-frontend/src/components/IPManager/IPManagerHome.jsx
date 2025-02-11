import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IPNavbar from "./IPNavbar";
import Footer from "../Admin/Footer";

const IPManagerHome = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  const [userData, setUserData] = useState({});
  const [projects, setProjects] = useState([]);
  let count = 0;

  useEffect(() => {
    fetch("http://localhost:8030/ipmanager/projects")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);

        setProjects(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [projects]);

  // useEffect(() => {
  //   fetch("http://localhost:8032/getUser/" + userid)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUserData(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8030/auth/getUser/" + userid)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  // const updateProject = async (id) => {
  //   await fetch("http://localhost:8033/update-project/" + id, {
  //     method: "PUT",
  //   }).then((response) => {
  //     if (response.status === 200) {
  //       setEmployees(
  //         employees.filter((emp) => {
  //           return emp.user_id !== id;
  //         })
  //       );
  //     } else {
  //       return;
  //     }
  //   });
  // };

  return (
    <div className="bg-primary-subtle" style={{ height: "100%" }}>
      <IPNavbar />
      <div className="container">
        <div className="rounded userMessage text-center mt-5 me-5 ms-5 mb-4 p-3  bg-light">
          <h2>Welcome {userData.fname}</h2>
        </div>

        <div className="mTable ">
          <h3 className="text-center mb-3">Projects</h3>
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col ">Sr No</th>

                <th scope="col">Project Name</th>
                {/* <th scope="col">Location Name</th> */}
                <th scope="col">Location Address</th>
                <th scope="col">Location City</th>
                <th scope="col">Site Operator</th>
                <th scope="col">Project Manager</th>
                <th scope="col">Action</th>
                {/* <th scope="col">Project Manager Id</th> */}
                {/* <th scope="col">Site Operator Id</th> */}
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => {
                // console.log(project);

                count++;
                return (
                  <tr className="text-center" key={project.projectId}>
                    <td>{count}</td>
                    <td>{project.projectName}</td>
                    <td>{project.locationAddress}</td>
                    <td>{project.locationCity}</td>
                    <td>{project.siteOperator}</td>
                    <td>{project.projectManager}</td>

                    <td>
                      <button
                        className="btn btn-danger"
                        type="button"
                        name={project.projectId}
                        onClick={(e) => {
                          console.log(e.target.name);
                          localStorage.setItem(
                            "projectid",
                            JSON.stringify(e.target.name)
                          );
                          confirm("Do you want to update project?")
                            ? navigate("/updateProject", { state: project })
                            : alert("not updated");
                        }}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center pt-1 pb-3">
          <div className="p-3 pb-2 w-10">
            <button
              className="btn btn-success w-100"
              type="button"
              onClick={() => navigate("/addProject")}
            >
              Add Project
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IPManagerHome;
