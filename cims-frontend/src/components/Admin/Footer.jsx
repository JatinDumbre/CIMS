import React from "react";
import "../../styles/Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer  ">
      <div className="footer-content ">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
