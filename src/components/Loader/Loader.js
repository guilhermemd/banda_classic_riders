import "./Loader.css";
import logoGif from "../../img/gif/logobandgif.gif";

const Loader = () => {
  return (
    <div className="loading">
      <img src={logoGif} alt="logogif" />
      <div className="dots__area">
        <p className="dots__area__text">Carregando</p>
        <div className="dot1"> </div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </div>
    </div>
  );
};

export default Loader;
