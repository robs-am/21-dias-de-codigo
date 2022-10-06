import "./styles.css";
import { IoClose } from "react-icons/io5";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <div className="container" isVisible={menuIsVisible}> 
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav className="navbar">
        
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
