import { useAgenda } from "../../talons/Agenda/useAgenda";
import Loader from "../Loader";
import logoBand from "../../img/logo-band.svg";

const HomeAgenda = () => {
  const { data } = useAgenda();
  const nextConcerts = data.slice(0, 2);

  return (
    <>
      {data.length === 0 ? (
        <div className="news__loading">
          <Loader />
        </div>
      ) : (
        <div className="agenda__home">
          <div className="news__title__wrapper">
            <img src={logoBand} alt="logo" className="news__logo" />
            <div className="news__title__dates">
              <div>Próximos Shows:</div>
              <div>
                {nextConcerts.map(({ dateBr, local }) => (
                  <div className="news__nextConcert">
                    <span>{dateBr}</span>
                    <span> - </span>
                    <span>{local}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeAgenda;
