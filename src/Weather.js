import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';
import WeatherData from "./WeatherData";

import "./Weather.css";

export default function Weather(props) {
  const [dispalyData, setDispalyData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleWeather(response) {
    setDispalyData({
      ready: true,
      date: "Friday | 19 February | 14:00",
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].main,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed * 2.237)
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fe75cdcdc7e5e9de834be3340e916f6e&units=metric`;
    axios.get(apiUrl).then(handleWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if(dispalyData.ready) {
    return (
      <div className="Weather border rounded shadow">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row g-2 justify-content-end">
            <div className="col col-sm-auto">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                   onChange={updateCity}
                  placeholder="Enter a city"
                  autoComplete="off"
                  />
                  <button type="submit" className="btn btn-light btn-search">
                    <Icon.Search className="icon-search"/>
                  </button>
              </div>
            </div>
            <div className="col-auto btn-group">
              <button
                type="submit"
                className="btn btn-outline-light btn-current-location"
                >
                  <Icon.ArrowsMove className="icon-current-location"/>
              </button>
            </div>
          </div>
        </form>

         <WeatherData data={dispalyData}/>

      </div>
      );
  } else {
    search();
    return (<div>"loding"</div>);
  }
}