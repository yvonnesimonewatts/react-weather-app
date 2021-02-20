import React, { useState } from 'react';
import axios from 'axios';
import ForecastData from "./ForecastData";
import './Forecast.css';

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dispalyForecast, setDispalyForecast] = useState(null);

  function handleForecast(response) {
    setDispalyForecast(response.data);
    setLoaded(true);
  }
  
  if (loaded && props.city === dispalyForecast.city.name) { 
    console.log(dispalyForecast.list[0]);
    return ( 
    <div className="row Forecast justify-content-center">
      <ForecastData data={dispalyForecast.list[0]}/>
      <ForecastData data={dispalyForecast.list[1]}/>
      <ForecastData data={dispalyForecast.list[2]}/>
      <ForecastData data={dispalyForecast.list[3]}/>
      <ForecastData data={dispalyForecast.list[4]}/>
    </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&APPID=fe75cdcdc7e5e9de834be3340e916f6e&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}