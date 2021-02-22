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
    //  if (calendarDate < 10) {
    //   calendarDate = `0${calendarDate}`;}

    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let month = months[date.getMonth()];
    if (month < 10) {
      month = `0${month}`;
    }

    return `${calendarDate}|${month}`;
  }

return (
  <div className="row DailyForecastData border p-2 mt-2 rounded shadow">
    <div className="col Date">
      <div><strong>{formatDay()}</strong></div> 
      <div>{formatDate()}</div> 
    </div>
      <div className="col">
        <WeatherIcon code={props.data.weather[0].icon}/>
        <div className="col Description">
          {props.data.weather[0].main}
        </div>
      </div>
        {/* <div className="col Temp">
          <strong>{Math.round(props.data.temp.day)}°</strong>
        </div> */}
          <div className="col High">
            <div><strong>{Math.round(props.data.temp.max)}°</strong></div>
            <div>High</div>
          </div>
            <div className="col Low">
              <div><strong>{Math.round(props.data.temp.min)}°</strong></div>
              <div>Low</div>
            </div>
  </div>
);
}