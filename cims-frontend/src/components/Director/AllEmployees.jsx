import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Admin/Footer";
import DNavbar from "./DNavbar";

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();
  let count = 0;
  useEffect(() => {
    fetch("http://localhost:8030/director/employeesbydirector")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setEmployees(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="bg-primary-subtle">
      <DNavbar />
      <div className="container">
        <div className="empTable ">
          <h3 className="text-center mb-3">All Employees</h3>
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col ">Sr No</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Email Id</th>
                <th scope="col">Address</th>
                <th scope="col">User Role</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => {
                count++;
                return (
                  <tr className="text-center" key={emp.userid}>
                    <th>{count}</th>
                    <td>{emp.fname}</td>
                    <td>{emp.lname}</td>

                    <td>{emp.mob_no}</td>
                    <td>{emp.email}</td>
                    <td>{emp.address}</td>
                    <td>{emp.acc_id}</td>
                    <td>{emp.status}</td>
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

export default AllEmployees;
