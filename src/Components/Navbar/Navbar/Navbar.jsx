import React, { useState } from "react";
import "./NavbarStyle.css";
import { FaBars, FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { FiInstagram, FiFacebook } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h3>RACE.</h3>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu "}>
          <li>
            {" "}
            <a href="/">Power</a>
          </li>
          <li>
            {" "}
            <a href="/">Speed</a>
          </li>
          <li>
            {" "}
            <a href="/">Handling</a>
          </li>
          <li>
            {" "}
            <a href="/">Options</a>
          </li>
          <li>
            {" "}
            <a href="/">Contact</a>
          </li>
          <div className="mobile-menu">
            <button>Shop</button>
            <button>Account</button>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <GiCarWheel className="icon" />
            </div>
          </div>
        </ul>

        <ul className="nav-menu hide">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#ffffff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
