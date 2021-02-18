import React from "react";
import * as Icon from 'react-bootstrap-icons';

import "./Weather.css";

export default function Weather() {
   let weatherData = {
    date: "Thursday | 18 February | 18:00",
    location: "London",
    temperature: 8,
    description: "clouds",
    humidity: 61,
    wind: 11
  };

return (
  <div className="Weather border rounded shadow">
    <form className="search-form">
      <div className="row g-2 justify-content-end">
        <div className="col col-sm-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
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

    <section className="section-overview">
      <div className="row timestamp-wrapper">
        <div className="col date-time">{weatherData.date}</div>
      </div>

      <div className="row temperature-wrapper">
        <div className="col-xs-12 col-md-5 left-temperature-wrapper">
          <div className="location">{weatherData.location}</div>
            <div className="currentTemperature">
              <span className="temperature">{weatherData.temperature}°</span>
              <span className="temp-unit"> °C | °F </span>
            </div>
        </div>

          <div className="col-md-3 mid-temperature-wrapper">
            <Icon.Cloud className="icon-temp"/>
          </div>

            <div className="col-md-4 right-temperature-wrapper align-self-end">
              <ul className="additional-data">
                <li>
                  <span className="description">
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  Humidity:{" "}
                  <span className="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span className="wind">{weatherData.wind}</span>
                  mph
                </li>
              </ul>
            </div>
      </div>
    </section>
  </div>
  );
}