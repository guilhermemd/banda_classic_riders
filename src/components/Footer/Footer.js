import "./Footer.css";

import logoBand from "../../img/logo-band.svg";

import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";
import spotify from "../../img/social/spotify.svg";
import whatsapp from "../../img/social/whatsapp.svg";
import youtube from "../../img/social/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <img src={logoBand} alt="logo-band" className="logoBand" />
        <div className="footer__contact">
          <p>Contato:</p>
          <div className="footer__contact__wrapper">
            <img src={whatsapp} alt="whatsapp" className="whatsapp" />
            <p>(51) 98947-6508</p>
          </div>
        </div>
        <div className="footer__social">
          <p>Redes Sociais:</p>
          <div className="footer__social__wrapper">
            <img src={instagram} alt="instagram" className="instagram" />
            <img src={facebook} alt="facebook" className="facebook" />
            <img src={youtube} alt="youtube" className="youtube" />
            <img src={spotify} alt="spotify" className="spotify" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
