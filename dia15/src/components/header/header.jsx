import React from "react";
import "./header.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <div>
      <nav className= {Mobile ? "nav-links-mobile": "nav-links"} onClick ={() => setMobile(false)}>
        
          <a classname="nav-links" href="#">Home</a>
          <a classname="nav-links" href="#">Headphones</a>
          <a classname="nav-links" href="#">Speakers</a>
          <a classname="nav-links" href="#">Earbuds</a>
          <div className="search">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-basket"></i>
          </div>
          <FaBars onClick ={()=>setMenuisVisible(true)} className="mobile" />
          {/* <div classname="mobile-button">
         { <button
            className="navbar-mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <ImCross /> : <FaBars />}
          </button>}
        </div>  */}
      </nav>
    </div>
  );
};

export default Header;
