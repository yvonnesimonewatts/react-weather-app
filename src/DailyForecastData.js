import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function DailyForecastData(props) {
 function formatDay(){
    let date = new Date(props.data.dt * 1000);
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
    let day = days[date.getDay()];

    return `${day}`;
 }

  function formatDate() {
  let date = new Date(props.data.dt * 1000);
  let calendarDate = date.getDate();
     if (calendarDate < 10) {
      calendarDate = `0${calendarDate}`;}

    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let month = months[date.getMonth()];
    if (month < 10) {
      month = `0${month}`;
    }

    return `${calendarDate}|${month}`;
  }

    function tempMax() {
    let max = Math.round(props.data.temp.max)
    return `${max}`;
  }

  function tempMin() {
    let min = Math.round(props.data.temp.min)
    return `${min}`;
  }


  if (props.unit === "celsius") {
  return (
  <div className="row DailyForecastData border p-1 m-1 rounded shadow">
    <div className="col date">
      <div className="format-day"><strong>{formatDay()}</strong></div> 
      <div className="format-date">{formatDate()}</div> 
    </div>
    <div className="col d-block m-auto">
      <div className="daily-icon">
        <WeatherIcon code={props.data.weather[0].icon}/>
      </div>
      </div>
          <div className="col high">
            <div><strong>{tempMax()}°</strong></div>
            <div className="temp-tag">High</div>
          </div>
            <div className="col low">
              <div><strong>{tempMin()}°</strong></div>
              <div className="temp-tag">Low</div>
            </div>
  </div>
  );
} else {
  return (
    <div className="row DailyForecastData border p-1 m-1 rounded shadow">
      <div className="col date">
        <div className="format-day"><strong>{formatDay()}</strong></div> 
        <div className="format-date">{formatDate()}</div> 
      </div>
        <div className="col d-block m-auto">
          <div className="daily-icon ">
            <WeatherIcon code={props.data.weather[0].icon}/>
            </div>
        </div>
            <div className="col high">
              <div><strong>{Math.round((tempMax() * 9) / 5 + 32)}°</strong></div>
              <div className="temp-tag">High</div>
            </div>
              <div className="col low">
                <div><strong>{Math.round((tempMin() * 9) / 5 + 32)}°</strong></div>
                <div className="temp-tag">Low</div>
              </div>
    </div>
    );
  }
}