import React, { useState } from 'react';
import axios from 'axios';
import DailyForecastData from './DailyForecastData';
import './DailyForecast.css';

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [displayforecast, setDailyForecast] = useState(null);

  function handleDailyForecast(response) {
    setDailyForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.lat === displayforecast.lat && props.lon === displayforecast.lon) {
    return (
      <div className="row DailyForecast justify-content-center">
        <DailyForecastData data={displayforecast.daily[1]} unit={props.unit}/>
        <DailyForecastData data={displayforecast.daily[2]} unit={props.unit}/>
        <DailyForecastData data={displayforecast.daily[3]} unit={props.unit}/>
        <DailyForecastData data={displayforecast.daily[4]} unit={props.unit}/>
        <DailyForecastData data={displayforecast.daily[5]} unit={props.unit}/>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=hourly,minutely&APPID=fe75cdcdc7e5e9de834be3340e916f6e&units=metric`;
    axios.get(apiUrl).then(handleDailyForecast);
    return null;
  }
}