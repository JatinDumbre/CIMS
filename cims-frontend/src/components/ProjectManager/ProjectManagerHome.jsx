import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PMNavbar from "./PMNavbar";
import Footer from "../Admin/Footer";

const ProjectManagerHome = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  const [userData, setUserData] = useState({});
  const [materials, setMaterials] = useState([]);
  let count = 0;

  useEffect(() => {
    fetch("http://localhost:8030/auth/getUser/" + userid)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8030/projectmanager/projectmanager/" + userid)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setMaterials(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  return (
    //
    <div className="bg-primary-subtle" style={{ height: "100%" }}>
      <PMNavbar />
      <div className="container">
        <div className="rounded userMessage text-center mt-5 me-5 ms-5 mb-4 p-3  bg-light">
          <h2>Welcome {userData.fname}</h2>
        </div>

        <div className="mTable ">
          <h3 className="text-center mb-3">Materials</h3>
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col ">Sr No</th>
                {/* <th scope="col">Project Name</th> */}
                <th scope="col">Material Name</th>
                {/* <th scope="col">Quantity</th> */}
                <th scope="col">Units</th>
                {/* <th scope="col">Category</th> */}
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                {/* <th scope="col">Site Operator Id</th> */}
              </tr>
            </thead>
            <tbody>
              {materials.map((mat) => {
                count++;
                return (
                  <tr className="text-center" key={mat.matId}>
                    <td>{count}</td>
                    {/* <td>{mat.projectName}</td> */}
                    <td>{mat.materialName}</td>
                    {/* <td>{mat.quantity}</td> */}
                    <td>{mat.unitName}</td>
                    {/* <td>{mat.categoryName}</td> */}
                    <td>{mat.description}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        type="button"
                        name={mat.matId}
                        onClick={(e) => {
                          console.log(e.target.name);
                          localStorage.setItem(
                            "mid",
                            JSON.stringify(e.target.name)
                          );
                          confirm(
                            `Do you want to request ${mat.materialName} ?`
                          )
                            ? navigate("/requestMaterialToSiteOperator", {
                                state: {
                                  materialName: mat.materialName,
                                  unitName: mat.unitName,
                                },
                              })
                            : alert("not updated");
                        }}
                      >
                        Request
                      </button>
                    </td>
                    {/* <td>{mat.siteOperatorId}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectManagerHome;
