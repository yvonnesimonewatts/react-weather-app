import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function HourlyForecastData(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function tempMax() {
    let max = Math.round(props.data.main.temp_max)
    return `${max}`;
  }

  function tempMin() {
    let min = Math.round(props.data.main.temp_min)
    return `${min}`;
  }

  if (props.unit === "celsius") {
    return(
    <div className="col HourlyForecastData border p-2 mt-2 rounded shadow">
      <div className="Hours"><strong>{hours()}</strong></div>
      <div className="HourlyIcon"><WeatherIcon code={props.data.weather[0].icon}/></div>
      <div className="Temp">
      <span><strong>{tempMax()}°</strong></span>
      {" "}|{" "}
      <span>{tempMin()}°</span>
      </div>
    </div>
  );
  } else {
    return(
    <div className="col HourlyForecastData border p-2 mt-2 rounded shadow">
      <div className="Hours"><strong>{hours()}</strong></div>
      <div className="HourlyIcon"><WeatherIcon code={props.data.weather[0].icon}/></div>
      <div className="Temp">
      <span><strong>{Math.round((tempMax() * 9) / 5 + 32)}°</strong></span>
      {" "}|{" "}
      <span>{Math.round((tempMin() * 9) / 5 + 32)}°</span>
      </div>
    </div>
  );
  }


}