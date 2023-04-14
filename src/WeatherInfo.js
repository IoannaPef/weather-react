import React from "react";
import WeatherIcon from "./WeatherIcon";
import ApplyDate from "./ApplyDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}, {props.data.country}</h1>
      <ul>
        <li>
          <ApplyDate date={props.data.time} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className=" col-md-6 col-sm-8">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={53} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 items" >
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>Feels Like: {Math.round(props.data.feelsLike)}°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
