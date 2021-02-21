import React, { useState } from "react";
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import WeatherData from "./WeatherData";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import "./Weather.css";


export default function Weather(props) {
  const [dispalyData, setDispalyData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleWeather(response) {
    setDispalyData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].main,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed * 2.237),
      lon: response.data.coord.lon,
      lat: response.data.coord.lat
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

  function handleLocation(position) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=fe75cdcdc7e5e9de834be3340e916f6e&units=metric`;

    axios.get(apiUrl).then(handleWeather);
}

  function updateCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleLocation);
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
                onClick={updateCurrentLocation}
                >
                  <Icon.ArrowsMove className="icon-current-location"/>
              </button>
            </div>
          </div>
        </form>
         <WeatherData data={dispalyData}/>
         <p className="HourlyForecastHeading">Today's weather</p>
         <HourlyForecast city={dispalyData.city}/>
         <p className="DailyForecastHeading">Next 5 Days</p>
         <DailyForecast 
            city={dispalyData.city}
            lon={dispalyData.lon}
            lat={dispalyData.lat}
          />
      </div>
      );
  } else {
    search();
    return (<div>updating weather</div>);
  }
}