import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { images } from "../../Data";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className="nav-links">
        <li className="list-item">
          <a href="#home">Home</a>
        </li>
        <li className="list-item">
          <a href="#about">About</a>
        </li>
        <li className="list-item">
          <a href="#menu">Menu</a>
        </li>
        <li className="list-item">
          <a href="#awards">Awards</a>
        </li>
        <li className="opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-login">
        <a href="#login" className="list-item">
          Register
        </a>
        <div></div>
        <a href="#login" className="list-item">
          Book A Table
        </a>
      </div>
      <div className="nav-smallScreen">
        <GiHamburgerMenu className="hamburgerMenu" onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="nav-overlay">
            <MdOutlineRestaurantMenu
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="nav-smallScreen-links">
              <li className="list-item">
                <a href="#home">Home</a>
              </li>
              <li className="list-item">
                <a href="#about">About</a>
              </li>
              <li className="list-item">
                <a href="#menu">Menu</a>
              </li>
              <li className="list-item">
                <a href="#awards">Awards</a>
              </li>
              <li className="list-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
