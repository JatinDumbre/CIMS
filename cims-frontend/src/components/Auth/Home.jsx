import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Home.css";
import Footer from "../Admin/Footer";

const Home = () => {
  // const navigate = useNavigate();
  // const mystate = useSelector((state) => state.logged);
  return (
    <div className=" home-content">
      <div className="content" style={{ height: "100%" }}>
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

      <Footer />
    </div>
  );
};

export default Home;
