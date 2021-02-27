import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function HourlyForecastData(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temp() {
    let temp = Math.round(props.data.main.temp)
    return `${temp}`;
  }

  if (props.unit === "celsius") {
    return(
    <div className="col HourlyForecastData border m-1 rounded shadow">
      <div className="hours">{hours()}</div>
      <div className="hourly-icon"><WeatherIcon code={props.data.weather[0].icon}/></div>
      <div className="temp">
        <strong>{temp()}°</strong>
      </div>
    </div>
  );
  } else {
    return(
    <div className="col HourlyForecastData border m-1 rounded shadow">
      <div className="hours">{hours()}</div>
      <div className="hourly-icon"><WeatherIcon code={props.data.weather[0].icon}/></div>
      <div className="temp">
        <strong>{Math.round((temp() * 9) / 5 + 32)}°</strong>
      </div>
    </div>
  );
  }


}