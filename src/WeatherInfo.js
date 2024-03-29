import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo ">
      <h1 className="TMR white">{props.data.city.toUpperCase()}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>
          <em>{props.data.description.toLowerCase()}</em>
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
