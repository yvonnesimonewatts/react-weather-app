import React, { useState } from 'react';
import axios from 'axios';
import HourlyForecastData from './HourlyForecastData';
import './HourlyForecast.css';

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dispalyForecast, setDispalyForecast] = useState(null);

  function handleHourlyForecast(response) {
    setDispalyForecast(response.data);
    setLoaded(true);
  }
  
  if (loaded && props.city === dispalyForecast.city.name) { 
    return ( 
    <div className="row HourlyForecast justify-content-center">
      <HourlyForecastData data={dispalyForecast.list[0]} unit={props.unit}/>
      <HourlyForecastData data={dispalyForecast.list[1]} unit={props.unit}/>
      <HourlyForecastData data={dispalyForecast.list[2]} unit={props.unit}/>
      <HourlyForecastData data={dispalyForecast.list[3]} unit={props.unit}/>
      <HourlyForecastData data={dispalyForecast.list[4]} unit={props.unit}/>
    </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&APPID=fe75cdcdc7e5e9de834be3340e916f6e&units=metric`;
    axios.get(apiUrl).then(handleHourlyForecast);
    return null;
  }
}