import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SONavbar = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  console.log(userid);

  const [materials, setMaterials] = useState();
  useEffect(() => {
    fetch("http://localhost:8033/siteOp/" + userid)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setMaterials(data);
        console.log(materials);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <nav className=" navbar navbar-expand-sm bg-light mb-3">
        <div className=" container d-flex flex-row-reverse">
          <ul className="navbar-nav d-flex flex-row-reverse">
            <li className="nav-item">
              <a
                className="nav-link px-3 nav-links "
                style={{ color: "orange" }}
                onClick={() =>
                  confirm("Do you want to logout?")
                    ? navigate("/logout")
                    : navigate("/siteoperator")
                }
              >
                Logout
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/requestMatToIP"
                className="nav-link px-3 nav-links"
                style={{ color: "orange" }}
              >
                Add Material
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/allRequests"
                className="nav-link px-3 nav-links"
                style={{ color: "orange" }}
                // name={materials[0].projectId}
                onClick={(e) => {
                  // console.log(e.target.name);
                  localStorage.setItem(
                    "projectid",
                    JSON.stringify(materials[0].projectId)
                  );
                }}
              >
                All Requests
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/update"
                className="nav-link px-3 nav-links"
                style={{ color: "orange" }}
              >
                Update Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SONavbar;
