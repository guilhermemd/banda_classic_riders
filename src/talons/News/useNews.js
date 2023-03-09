import whiplash from "../../img/news/whiplash.png";
import DG from "../../img/news/DG.png";
import CP from "../../img/news/CP.png";
export const useNews = () => {
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

  return {
    imgsMews,
  };
};
