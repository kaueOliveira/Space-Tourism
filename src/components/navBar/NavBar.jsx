import React, { useState } from "react";
import "./NavBar.css"; // vamos criar esse arquivo já já
import iconHamburguer from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <header>
        <img src={logo} alt="" />
        {/* Botão de abrir/fechar */}
        <img
          src={iconHamburguer}
          alt="Open Menu"
          className="menu-btn"
          onClick={toggleMenu}
          id={isOpen ? "hidden" : ""}
        />
        {/* Menu lateral */}
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <img
            src={iconClose}
            alt=""
            className="close-btn"
            onClick={toggleMenu}
          />
          <ul>
            <li>
              <Link to="/"><span>00</span>HOME</Link>
            </li>
            <li>
              <Link to="/destination"><span>01</span>DESTINATION</Link>
            </li>
            <li>
              <Link to="/crew"><span>02</span>CREW</Link>
            </li>
            <li>
              <Link to="/technology"><span>03</span>TECNOLOGY</Link>
            </li>
          </ul>
        </div>
        {/* Overlay para clicar fora e fechar */}
        {/* {isOpen && <div className="overlay" onClick={toggleMenu}></div>} */}
      </header>
    </nav>
  );
}

export default NavBar;
