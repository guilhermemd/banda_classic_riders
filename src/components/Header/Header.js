import { useState } from "react";
import burger from "../../img/burger-menu.svg";
import "./Header.css";
const Header = () => {
  const [sideNavActive, setSideNavActive] = useState(false);
  const menuOptions = ["Agenda", "Fotos", "Integrantes", "Contato"];
  return (
    <header className="header">
      <div
        className="headerOptions"
        onClick={() => setSideNavActive(!sideNavActive)}
      >
        <img src={burger} alt="menu" className="burger" />
        <h3>Classic Riders</h3>
      </div>
      {sideNavActive && (
        <div className="sideNavMenu">
          {menuOptions.map((item) => (
            <div className="sideNavMenuOptions">{item}</div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
