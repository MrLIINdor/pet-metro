import { useEffect, useState } from "react";
import Header from "../widgets/Header/Header";
import Frame from "../widgets/Frame/Frame";
import Load from "../components/Load/Load";
import axios from "axios";
import Footer from "../widgets/Footer/Footer";
import "./style.css";

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
      <Footer />
    </>
  );
}

export default App;
