import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import Perfil from "./images.js";

const Navbar = () => {
  return (
    <>
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
      <section className="hero">
        <div className="card-perfil">
          <div className="perfil">
            <Perfil />
          </div>
          <a
            href="http://linkedin.com/roberta-amaro"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/robs-am"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
          <button onClick={() => window.location = 'mailto:roberta.amaro89l@gmail.com'}>Contact Me</button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
