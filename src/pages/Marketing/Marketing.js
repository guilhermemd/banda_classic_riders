import "./Marketing.css";
import insta from "../../img/marketing/insta.png";
import instadados1 from "../../img/marketing/instadados1.png";
import instadados2 from "../../img/marketing/instadados2.png";

import face from "../../img/marketing/face.png";
import facedados1 from "../../img/marketing/facedados1.png";

const Marketing = () => {
  return (
    <div className="marketing">
      <div className="marketing__wrapper">
        <h1 className="marketing__title">Anuncie com</h1>
        <h1 className="marketing__title__band">Classic Rider's</h1>
        <p>
          Gostariamos de apresentar nossa página no Facebook e no Instagram para
          sua empresa. Com 8.100 seguidores no Facebook e 13.000 no instagram,
          ativos e engajados, acreditamos que podemos oferecer uma grande
          oportunidade para que sua marca alcance um público amplo e segmentado.
        </p>
        <p>
          Somos uma das banda mais influentes do meio motociclistico no Sul do
          País, hoje a banda atua nos maiores eventos e casas de shows do RS,
          tais como, Moto Charqueadas, Moto Lagoa, Moto Morango, Carbomotos,
          Opinião, Sgt Pepper's, Confraria das Maquinas dentre outros.
          <p>
            No ano de 2023 participaremos do Floripa Moto Week com bandas como
            IRA e Raimundos.
          </p>
          Atingimos mais de 50 mil pessoas mês em nossas postagens e
          publicações, basicamente do mundo motociclístico e fãs do Rock n Roll.
          Temos participações nos programas de TV como Radar e ShowLivre, com
          reportagens no Whiplash, Diário Gaúcho e Correio do Povo.
        </p>

        <p>
          Nossa página é dedicada ao bom e velho Rock n Roll, Motociclismo e
          festivais. Temos como objetivo fornecer informações relevantes e de
          qualidade para nossa comunidade. Acredito que sua empresa possua
          serviços que são complementares ao que oferecemos e, por isso, seria
          uma parceria ideal.
        </p>

        <div className="marketing__instagram">
          <h1>Instagram</h1>
          <img src={insta} alt="insta1" />
          <div className="marketing__instagram__wrapper">
            <img src={instadados1} alt="insta2" />
            <img src={instadados2} alt="insta3" />
          </div>
        </div>

        <div className="marketing__facebook">
          <h1>Facebook</h1>
          <img src={face} alt="face1" />
          <img src={facedados1} alt="face2" />
        </div>
        <p>
          Oferecemos diversas opções de divulgação, incluindo publicações
          patrocinadas, stories e destaques na nossa página. Tudo isso com o
          objetivo de ajudar sua empresa a alcançar seus objetivos de marketing
          e alcançar novos clientes.
        </p>
        <p>Entre em contato para maiores informações.</p>
      </div>
    </div>
  );
};

export default Marketing;
