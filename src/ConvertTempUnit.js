import React, { useState } from 'react';

export default function ConvertTempUnit(props) {
  const [unit, setUnit] = useState("celsius");
    
  function convertFahrenheit(event) { 
    event.preventDefault();
    setUnit("fahrenheit");
  }

    function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  
  if (unit === "celsius") {
    return  (
    <div className="ConvertTempUnit">
      <span className="temperature">{Math.round(props.celsius)}°</span>
      <span className="temp-unit"> °C | <a href="/" onClick={convertFahrenheit}>°F</a></span>  
    </div>
      );
    } else {
      let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
      return (
      <div className="ConvertTempUnit">
        <span className="temperature">{fahrenheit}°</span>
        <span className="temp-unit"><a href="/" onClick={convertCelsius}>°C</a> | °F</span>  
      </div>
      );
    }
  }
  
