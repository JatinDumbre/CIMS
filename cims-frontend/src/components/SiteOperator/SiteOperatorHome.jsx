import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Admin/Footer";
import SONavbar from "./SONavbar";

const SiteOperatorHome = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  const [userData, setUserData] = useState({});
  const [materials, setMaterials] = useState([]);
  let count = 0;

  useEffect(() => {
    fetch("http://localhost:8033/siteOp/" + userid)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setMaterials(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
      <SONavbar />
      <div className="container">
        <div className="rounded userMessage text-center mt-5 me-5 ms-5 mb-4 p-3  bg-light">
          <h2>Welcome, {userData.fname}</h2>
        </div>

        <div className="d-flex justify-content-around info mt-5 mb-5">
          <div>
            {/* <b> Project Location: {materials[0].projectName}</b> */}
          </div>
          <div className="">
            {/* <b> Project Manager ID: {materials[0].projectManagerId}</b> */}
          </div>
        </div>

        <div className="mTable ">
          <h3 className="text-center mb-3">Materials</h3>
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col ">Sr No</th>
                {/* <th scope="col">Project Name</th> */}
                <th scope="col">Material Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Units</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                {/* <th scope="col">Project Manager Id</th> */}
                {/* <th scope="col">Site Operator Id</th> */}
              </tr>
            </thead>
            <tbody>
              {materials.map((mat) => {
                count++;
                return (
                  <tr className="text-center" key={count}>
                    <td>{count}</td>
                    {/* <td>{mat.projectName}</td> */}
                    <td>{mat.materialName}</td>
                    <td>{mat.quantity}</td>
                    <td>{mat.unitName}</td>
                    <td>{mat.categoryName}</td>
                    <td>{mat.description}</td>
                    {/* <td>{mat.projectManagerId}</td> */}
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

export default SiteOperatorHome;
