import React from 'react';
import FormatDate from './FormatDate';
import ConvertTempUnit from './ConvertTempUnit';
import WeatherIcon from './WeatherIcon';

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <section className="section-overview">
          <div className="row timestamp-wrapper">
            <div className="col date-time"><FormatDate date={props.data.date} /></div>
          </div>

          <div className="row temperature-wrapper">
            <div className="col-xs-12 col-md-5 left-temperature-wrapper">
              <div className="location"><span>{props.data.city},</span> 
              {/* <span>{props.data.country}</span> */}
              </div>
                <div className="currentTemperature">
                  <ConvertTempUnit 
                    celsius={props.data.temperature} 
                    unit={props.unit}
                    setUnit={props.setUnit}
                  />
                </div>
            </div>

              <div className="col-md-3 d-block m-auto mid-temperature-wrapper">
                <div className="MainIcon">
                <WeatherIcon code={props.data.icon} />
                </div>
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