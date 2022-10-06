import React from "react";
import "./header.css";
import { useState } from "react";
/* import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im"; */

const Header = () => {
  

  return (
    <div>
      <nav className="navbar">
        <ul
          
        >
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earbuds</li>
          <div className="search">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-basket"></i>
          </div>
        </ul>
        <div classname="mobile-button">
         {/*  <button
            className="navbar-mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <ImCross /> : <FaBars />}
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
