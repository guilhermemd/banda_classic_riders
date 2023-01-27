import "./Fotos.css";
import alemao from "../../img/gallery_photos/alemao.jpg";
import duca from "../../img/gallery_photos/duca.jpg";
import mexicana from "../../img/gallery_photos/mexicana.jpg";
import tnt from "../../img/gallery_photos/tnt.jpg";
import van from "../../img/gallery_photos/van.jpg";

const Fotos = () => {
  return (
    <div className="fotos">
      <img src={alemao} alt="alemao" />
      <img src={duca} alt="duca" />
      <img src={mexicana} alt="mexicana" />
      <img src={tnt} alt="tnt" />
      <img src={van} alt="van" />
    </div>
  );
};

export default Fotos;
