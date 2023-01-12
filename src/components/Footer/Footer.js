import "./Footer.css";
import logoBand from "../../img/logo-band.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <img src={logoBand} alt="logo-band" className="logoBand" />
        <div className="footer__contact">
          <p>Contato</p>
          <p>Telefone: (51) 98947-6508</p>
        </div>
        <div className="footer__contact">
          <p>Redes Sociais:</p>
          <p>Instagram</p>
          <p>FaceBook</p>
          <p>YouTube</p>
          <p>Spotify</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
