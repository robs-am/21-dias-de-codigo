import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Perfil from "./images.js";

const Navbar = () => {
  return (
    <>
     
      <nav className="navbar">
        <ul className="nav-links">
          <Link className="nav-links-hover" to="/home">
            <li>Início</li>
          </Link>
          <Link className="nav-links-hover" to="/projects">
            <li>Projetos</li>
          </Link>
          <Link className="nav-links-hover" to="/skills">
            <li>Habilidades</li>
          </Link>
          <Link className="nav-links-hover" to="/contact">
            <li>Contato</li>
          </Link>
        </ul>

        <button className="mobile-menu-icon">
          <FaBars />
        </button>
      </nav>

      <div className="container-card">
        <section className="card">
          <div className="card-perfil">
            <div className="perfil">
              <Perfil />
            </div>
            <div className="nome">
              <h2 className="roberta">Roberta Amaro</h2>
              <h3 className="desenvolvedora">Desenvolvedora Front-End</h3>
            </div>
            <div className="social">
              <a
                className="icone"
                href="http://linkedin.com/roberta-amaro"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="icone"
                href="https://github.com/robs-am"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <button
                className="icone"
                onClick={() =>
                  (window.location = "mailto:roberta.amaro89l@gmail.com")
                }
              >
                <AiOutlineMail />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
