import "./styles.css";
import { IoClose } from "react-icons/io5";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <div className="container">
      <IoClose size={45} />
      <nav className="navbar">
        <ul>
          <a classname="nav-links" href="#">Home</a>
          <a classname="nav-links" href="#">Headphones</a>
          <a classname="nav-links" href="#">Speakers</a>
          <a classname="nav-links" href="#">Earbuds</a>
          <div className="search">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-basket"></i>
          </div>
        </ul>
      </nav>
    </div>
  );
}
