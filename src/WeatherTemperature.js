import React from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature TMR">
      <span className="temperature" style={{ fontSize: "75px" }}>
        {Math.round(props.celsius)}
      </span>
      <span className="unit">°C</span>
    </div>
  );
}
