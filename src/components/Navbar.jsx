import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      <div className="navLinks">
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/appointment" className="link">Appointmet</Link>
          <Link to="/about" className="link">About</Link>
        </div>
        <div className="buttons">
          <>
            <Link to='login' className="loginBtn btn">
              Login
            </Link>
            <Link to='register' className="registerBtn btn">Register</Link>
          </>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
