import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css"



const Navbar = () => {
  
  return (
    <nav>
      <div className="logo">
        <a >
          <img src={logo}  alt="logo" className="logo-img" />
        </a>
      </div>
      <div className="navLinks">
        <div className="links">
          <a  className="link">Home</a>
          <a  className="link">Appointmet</a>
          <a  className="link">About</a>
        </div>
        <div className="buttons">
          <>
            <a  className="loginBtn btn">
              Login
            </a>
            <a className="registerBtn btn">Register</a>
          </>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
