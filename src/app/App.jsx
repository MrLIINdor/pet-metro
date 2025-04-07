import { useEffect, useState } from "react";
import Header from "../widgets/Header/Header";
import "./style.css";
import Frame from "../widgets/Frame/Frame";
import Load from "../components/Load/Load";
import axios from "axios";

function App() {
  const [stations, setStations] = useState({
    data: {},
    isLoading: true,
  });

  useEffect(() => {
    getStations();
  }, []);

  async function getStations() {
    await axios
      .get("https://api.hh.ru/metro/1")
      .then((response) => {
        setTimeout(() => {
          setStations({
            ...stations,
            data: response.data,
            isLoading: false,
          });
        }, 4000);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return stations.isLoading ? (
    <Load />
  ) : (
    <>
      <Header />
      <Frame data={stations.data} />
    </>
  );
}

export default App;
