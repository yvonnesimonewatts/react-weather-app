import React from 'react';

export default function ConvertTempUnit(props) {

  function convertFahrenheit(event) { 
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

    function convertCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  
  if (props.unit === "celsius") {
    return  (
    <div className="ConvertTempUnit">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="temp-unit"><span className="current-unit"> °C |</span> <a href="/" onClick={convertFahrenheit}>°F</a></span>  
    </div>
      );
    } else {
      let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
      return (
      <div className="ConvertTempUnit">
        <span className="temperature">{fahrenheit}</span>
        <span className="temp-unit"><span className="current-unit"> °F |</span>  <a href="/" onClick={convertCelsius}>°C</a></span>  
      </div>
      );
    }
  }
  
