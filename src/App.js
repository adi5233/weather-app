import { useEffect, useState } from "react";
import Header from "./components/Header";
import LocationDetails from "./components/LocationDetails";
import Weather from "./components/Weather";
import Line from "./components/Line";
import AdditionalDetails from "./components/AdditionalDetails";
import TemperatureChart from "./components/TemperatureChart";
import getFormattedWeatherData from "./services/getFormattedWeatherData";
import "./App.css";

function App() {
  const [query, setQuery] = useState({ q: "mumbai" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units: "metric" }).then(
        (data) => {
          setWeather(data);
        }
      );
    };

    fetchWeather();
  }, [query]);

  return (
    <div className="App md:px-36">
      {weather && (
        <>
          <div className="upperbox p-8">
            <Header setQuery={setQuery} />
            <LocationDetails weather={weather} />
            <Weather items={weather.hourly} />
            <Line />
            <AdditionalDetails weather={weather} />
            <Line />
          </div>
          <div>
            <TemperatureChart weather={weather} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
