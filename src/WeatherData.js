import React from 'react';
import FormatDate from './FormatDate';
import ConvertTempUnit from './ConvertTempUnit';
import WeatherIcon from './WeatherIcon';

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
          <div className="row timestamp-wrapper">
            <div className="col date-time"><FormatDate date={props.data.date} /></div>
          </div>

          <div className="row temperature-wrapper">
            <div className="col">
              <div className="location">
                <span>{props.data.city}</span> 
              </div>
                  <ConvertTempUnit 
                    celsius={props.data.temperature} 
                    unit={props.unit}
                    setUnit={props.setUnit}
                  />
            </div>

              <div className="col d-block m-auto">
                <div className="main-icon">
                <WeatherIcon code={props.data.icon} />
                </div>
              </div>

                <div className="col align-self-end">
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
      </div>
  );
}