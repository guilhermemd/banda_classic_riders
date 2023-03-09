import "./News.css";
import HomeAgenda from "../homeAgenda/HomeAgenda";
import { useNews } from "../../talons/News/useNews";
const News = () => {
  const { imgsMews } = useNews();
  return (
    <section className="news">
      <HomeAgenda />
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
