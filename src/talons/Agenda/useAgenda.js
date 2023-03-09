import { useEffect, useState } from "react";
import axios from "axios";

export const useAgenda = () => {
  const endpoint = "https://server-schedule.vercel.app/schedule";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((response) => setData(response.data));
  }, []);

  return {
    data,
  };
};
