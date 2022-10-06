import React from 'react';
import './header.css';
import { useState } from "react";
import { FaBars } from 'react-icons/fa'
import { ImCross } from "react-icons/im";



const Header = () => {
  const [Mobile, setMobile] = useState(false)

  return (
    <div>
      <nav className='navbar'>
        <ul className= {Mobile ? "nav-links-mobile": "nav-links"} onClick ={() => setMobile(false)}>
          <li className='nav-links'>Home</li>
          <li className='nav-links'>Headphones</li>
          <li className='nav-links'>Speakers</li>
          <li className='nav-links'>Earbuds</li>
          <div className="search">
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-basket"></i>
        </div>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>{Mobile? <ImCross /> : <FaBars />}
          
          
          </button>
        
          
       
      </nav>
    </div>
  )
}

export default Header

