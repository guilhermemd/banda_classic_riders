import { useEffect, useState } from "react";
import axios from "axios";

import "./News.css";
import whiplash from "../../img/news/whiplash.png";
import DG from "../../img/news/DG.png";
import CP from "../../img/news/CP.png";
import logoBand from "../../img/logo-band.svg";

const imgsMews = [
  {
    image: DG,
    link: "http://amp.diariogaucho.clicrbs.com.br/rs/entretenimento/noticia/2021/02/trio-apaixonado-por-motos-e-rock-conheca-a-classic-rider-s-14666513.html",
  },
  {
    image: CP,
    link: "https://www.correiodopovo.com.br/blogs/cenarock/classic-rider-s-1.571744",
  },
  {
    image: whiplash,
    link: "https://whiplash.net/materias/news_731/330818-classicriders.html",
  },
];
const News = () => {
  const endpoint = "https://server-schedule.vercel.app/schedule";
  const [a, setA] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((response) => setA(response.data));
  }, []);

  const nextConcerts = a.slice(0, 2);
  return (
    <section className="news">
      <h2 className="subtitle">Motorock</h2>
      <div className="news__title__wrapper">
        <img src={logoBand} alt="logo" className="news__logo" />
        <div className="news__title__dates">
          <div>Próximos Shows:</div>
          <div>
            {nextConcerts.map(({ dateBr, local }) => (
              <div>
                <span>{dateBr}</span>
                <span> - </span>
                <span>{local}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="imgsWrapper">
        {imgsMews.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`img-news-${index}`}
            key={index}
          >
            <img src={item.image} alt={index} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default News;
