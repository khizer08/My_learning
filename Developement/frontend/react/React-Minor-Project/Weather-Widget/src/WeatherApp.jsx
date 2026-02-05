import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    // bengaluru sample info
    city: "Bengaluru",
    feelsLike: 17.05,
    humidity: 72,
    temp: 17.38,
    tempMax: 19.06,
    tempMin: 16.68,
    weather: "mist",
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div>
      <h2>Weather App By Delta</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
