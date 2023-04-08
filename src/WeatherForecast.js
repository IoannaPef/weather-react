import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
  function handleResponse(response){
    console.log(response.data);
  }

  let apiKey = "b40b135798f82a05aed08769f9275f50";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="clear-sky-day" size={32}/>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temep-max">19°</span>
              <span className="WeatherForecast-temep-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}