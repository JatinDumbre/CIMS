import React from "react";
import { useNavigate } from "react-router-dom";

const IPNavbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className=" navbar navbar-expand-sm bg-light mb-3">
        <div className=" container-fluid d-flex flex-row-reverse">
          <ul className="navbar-nav d-flex flex-row-reverse">
            <li className="nav-item">
              <a
                className="nav-link px-3 nav-links "
                style={{ color: "orange" }}
                onClick={() =>
                  confirm("Do you want to logout?")
                    ? navigate("/logout")
                    : navigate("/admin")
                }
              >
                Logout
              </a>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/register"
                className="nav-link px-3 nav-links"
                style={{ color: "orange" }}
              >
                New Registration
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
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default IPNavbar;
