import React from 'react';

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <section className="section-overview">
          <div className="row timestamp-wrapper">
            <div className="col date-time">{props.data.date}</div>
          </div>

          <div className="row temperature-wrapper">
            <div className="col-xs-12 col-md-5 left-temperature-wrapper">
              <div className="location">{props.data.city}</div>
                <div className="currentTemperature">
                  <span className="temperature">{props.data.temperature}°</span>
                  <span className="temp-unit"> °C | °F </span>
                </div>
            </div>

              <div className="col-md-3 mid-temperature-wrapper">
                 <img src={props.data.icon} alt={props.data.description} className="icon-temp"/>
              </div>

                <div className="col-md-4 right-temperature-wrapper align-self-end">
                  <ul className="additional-data">
                    <li>
                      <span className="description">
                        {props.data.description}
                      </span>
                    </li>
                    <li>
                      Humidity:{" "}
                      <span className="humidity">{props.data.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span className="wind">{props.data.wind}</span>
                      mph
                    </li>
                  </ul>
                </div>
          </div>
        </section>
      </div>
  );
}