import React from 'react';
import './header.css';


const Header = () => {


  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li className='nav-links'>Home</li>
          <li className='nav-links'>Headphones</li>
          <li className='nav-links'>Speakers</li>
          <li className='nav-links'>Earbuds</li>
          <div className="search">
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-basket"></i>
        </div>
        </ul>
        
      </nav>
    </div>
  )
}

export default Header

