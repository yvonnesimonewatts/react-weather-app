import React from 'react';

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img className="WeatherIcon" src={`/icons/${props.code}.svg`}
      alt={props.description} 
      />
    </div>
  );
}
