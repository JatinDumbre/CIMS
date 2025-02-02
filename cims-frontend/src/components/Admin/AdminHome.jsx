import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";

const AdminHome = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [employees, setEmployees] = useState([]);
  let count = 0;

  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;

  const deleteUser = async (id) => {
    await fetch("http://localhost:8033/deactivateEmployee/" + id, {
      method: "PUT",
    }).then((response) => {
      if (response.status === 200) {
        setEmployees(
          employees.filter((emp) => {
            return emp.user_id !== id;
          })
        );
      } else {
        return;
      }
    });
  };

  // const deleteUser = (id) => {
  //   fetch(`${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       setUsers((values) => {
  //         return values.filter((item) => item.id !== id);
  //       });
  //       AppToaster.show({
  //         message: "User deleted successfully",
  //         intent: "success",
  //         timeout: 3000,
  //       });
  //     });
  // };
  useEffect(() => {
    fetch("http://localhost:8032/getUser/" + userid)
      .then((resp) => resp.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8033/employees")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);

        setEmployees(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [employees]);

  return (
    <div className="bg-primary-subtle" style={{ height: "100%" }}>
      <AdminNavbar />

      <div className="container">
        <div className="rounded userMessage text-center mt-5 me-5 ms-5 mb-4 p-3  bg-light">
          <h2>Welcome, {userData.fname}</h2>
        </div>

        <div className="empTable ">
          <h3 className="text-center mb-3">Manage User</h3>
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => {
                count++;
                return (
                  <tr className="text-center" key={emp.user_id}>
                    <th>{count}</th>
                    <td>{emp.fname}</td>
                    <td>{emp.lname}</td>

                    <td>{emp.mob_no}</td>
                    <td>{emp.email}</td>
                    <td>{emp.address}</td>
                    <td>{emp.acc_id}</td>

                    <td>
                      <button
                        className="btn btn-danger"
                        type="button"
                        name={emp.userid}
                        onClick={(e) => {
                          console.log(e);

                          confirm("Do you want to delete?")
                            ? deleteUser(e.target.name)
                            : alert("not deleted");
                        }}
                      >
                        Delete
                      </button>
                    </td>
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

export default AdminHome;
