import React from 'react';
import './header.css';
import { useState } from "react";
import { FaBars } from 'react-icons/fa'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';



const Header = () => {
  const [Mobile, setMobile] = useState(false)

  return (
    <div>
      <nav className='navbar'>
        <ul className= {Mobile ? "nav-links-mobile": "nav-links"} onClick ={() => setMobile(false)}>
         
          <li className='nav-links-mobile-hover'>Home</li>
          <li className='nav-links-mobile-hover'>Headphones</li>
          <li className='nav-links-mobile-hover'>Speakers</li>
          <li className='nav-links-mobile-hover'>Earbuds</li>
          <div className="search">
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-basket"></i>
        </div>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>{Mobile? <ImCross size={25} /> : <FaBars size={25} />}
          
          
          </button>
        
          
       
      </nav>
    </div>
  )
}

export default Header

