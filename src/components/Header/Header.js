import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import burger from "../../img/burger-menu.svg";
import logo from "../../img/logo.svg";
import "./Header.css";

const Header = () => {
  const [sideNavActive, setSideNavActive] = useState(false);
  const menuOptions = ["Agenda", "Shop", "Contato"];

  // const history = useNavigate();

  // console.log(history);

  return (
    <header className="header">
      <div className="headerOptions">
        <button
          onClick={() => setSideNavActive(!sideNavActive)}
          className="header__burger__btn"
        >
          <img src={burger} alt="menu" className="burger" />
        </button>
        <img src={logo} alt="log" className="logo" />
      </div>
      {sideNavActive && (
        <div className="sideNavMenu">
          {menuOptions.map((item) => (
            <button
              // onClick={() => history("/agenda")}
              className="sideNavMenuOptions"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
