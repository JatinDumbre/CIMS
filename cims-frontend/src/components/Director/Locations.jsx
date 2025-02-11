import React, { useEffect, useState } from "react";
import DNavbar from "./DNavbar";
import Footer from "../Admin/Footer";
import { useNavigate } from "react-router-dom";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  const navigate = useNavigate();
  let count = 0;
  useEffect(() => {
    fetch("http://localhost:8030/director/alllocationsbydirector")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setLocations(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="bg-primary-subtle" style={{ height: "100%" }}>
      <DNavbar />
      <div className="container">
        <div className="empTable ">
          <h3 className="text-center mb-3">All Locations</h3>
          <table className="table table-hover ms-3 me-3">
            <thead>
              <tr className="text-center">
                <th scope="col ">Sr No</th>
                <th scope="col">Location Name</th>
                <th scope="col">Location Address</th>
                <th scope="col">Location City</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((loc) => {
                count++;
                return (
                  <tr className="text-center" key={loc.loc_id}>
                    <th>{count}</th>
                    <td>{loc.loc_name}</td>
                    <td>{loc.loc_add}</td>
                    <td>{loc.loc_city}</td>
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

export default Locations;
