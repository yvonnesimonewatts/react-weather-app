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

  return(
    <div className="col HourlyForecastData border p-2 mt-2 rounded shadow">
      <div className="Hours"><strong>{hours()}</strong></div>
      <WeatherIcon code={props.data.weather[0].icon}/>
      <div className="Temp">
      <span><strong>{tempMax()}°</strong></span>
      {" "}|{" "}
      <span>{tempMin()}°</span>
      </div>
    </div>
  );
}