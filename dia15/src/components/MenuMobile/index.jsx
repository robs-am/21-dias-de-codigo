import "./styles.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const MenuMobile = () => {
  const [Mobile, setMobile] = useState(true)
  return (
    <div className="container"> 
      <IoClose size={45}/>
      <nav className= {Mobile ? "nav-links-mobile": "nav-links"} onClick ={() => setMobile(true)}>
        
          <a classname="nav-links" href="#">Home</a>
          <a classname="nav-links" href="#">Headphones</a>
          <a classname="nav-links" href="#">Speakers</a>
          <a classname="nav-links" href="#">Earbuds</a>
          <div className="search">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-basket"></i>
          </div>
        
      </nav>
    </div>
  );

  
}

export default MenuMobile;
