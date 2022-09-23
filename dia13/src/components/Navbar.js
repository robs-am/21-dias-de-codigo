import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/home">
          <li>Início</li>
        </Link>
        <Link to="/contact">
          <li>Contato</li>
        </Link>
        <Link to="/projects">
          <li>Projetos</li>
        </Link>
        <Link to="/skills">
          <li>Habilidades</li>
        </Link>
      </ul>

      <button className="mobile-menu-icon">
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
