import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">°C</span>
      </div>
    );
  } else {
    return (
     null
    );
  }
}
