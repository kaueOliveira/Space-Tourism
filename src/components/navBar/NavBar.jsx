import React, { useState } from "react";
import "./NavBar.css"; // vamos criar esse arquivo já já
import iconHamburguer from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import logo from "../../assets/shared/logo.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
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
            <span>00</span>HOME
          </li>
          <li>
            <span>01</span>DESTINATION
          </li>
          <li>
            <span>02</span>CREW
          </li>
          <li>
            <span>03</span>TECNOLOGY
          </li>
        </ul>
      </div>

      {/* Overlay para clicar fora e fechar */}
      {/* {isOpen && <div className="overlay" onClick={toggleMenu}></div>} */}
    </header>
  );
}

export default NavBar;
