import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import burger from "../../img/burger-menu.svg";
import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";
import "./Header.css";

const Header = () => {
  const [sideNavActive, setSideNavActive] = useState(false);
  const menuOptions = [
    "Home",
    "Agenda",
    "Fotos",
    "Shop",
    "Marketing",
    "Contato",
  ];

  const history = useNavigate();

  const handlePathAndSideMenu = (param) => {
    history(`/${param}`);
    setSideNavActive(!sideNavActive);
  };

  return (
    <header className="header">
      <div className="headerOptions">
        <button
          onClick={() => setSideNavActive(!sideNavActive)}
          className="header__burger__btn"
        >
          <img src={burger} alt="menu" className="burger" />
        </button>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Link to={"/Shop"}>
          <img src={cart} alt="cart" className="cart" />
        </Link>
      </div>
      {sideNavActive ? (
        <div className="sideNavMenu">
          {menuOptions.map((item) => {
            if (item === "Contato") {
              return (
                <button
                  className="sideNavMenuOptions"
                  onClick={() => setSideNavActive(!sideNavActive)}
                >
                  <AnchorLink className="sideNavMenuOptions" href="#contato">
                    {item}
                  </AnchorLink>
                </button>
              );
            }

            return (
              <button
                onClick={() => handlePathAndSideMenu(item)}
                className="sideNavMenuOptions"
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
