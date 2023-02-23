import { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../../components/Loader";

import "./agenda.css";
const Agenda = () => {
  const endpoint = "https://server-schedule.vercel.app/schedule";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((response) => setData(response.data));
  }, []);

  if (data) {
    return (
      <div className="agenda__loading">
        <Loader />;
      </div>
    );
  }
  return (
    <section className="agenda">
      <h1>Agenda:</h1>
      {data.map(({ dateBr, local, city, state, address, hour, mapsInfo }) => (
        <div className="wrapperAgenda">
          <div className="agendaData">{dateBr}</div>
          <div className="agenda__wrapper_hourlocal">
            <span className="agendaLocal">{local}</span>
            {hour ? (
              <>
                <span> - </span>
                <span>{hour}</span>
              </>
            ) : null}
          </div>
          {city ? (
            <div className="agenda__wrapper_citystate">
              <span>{city}</span> <span> - </span>
              <span>{state}</span>
              <div>{address}</div>
            </div>
          ) : null}
          {mapsInfo ? (
            <a
              className="agenda__maps"
              href={mapsInfo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Maps
            </a>
          ) : null}
        </div>
      ))}
    </section>
  );
};

export default Agenda;
