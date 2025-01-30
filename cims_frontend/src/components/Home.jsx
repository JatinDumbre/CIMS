import React from "react";

import "../styles/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  // const navigate = useNavigate();
  // const mystate = useSelector((state) => state.logged);
  return (
    <>
      <Navbar />
      <div className="container-fluid home-content">
        <h1
          className=" text-center h1"
          style={{
            fontSize: "60px",
            color: "red",
            textDecoration: "underline",
            textShadow: "2px 3px 4px black",
          }}
        >
          <i>
            Construction Inventory Management <br /> System
          </i>
        </h1>
      </div>
    </>
  );
};

export default Home;
