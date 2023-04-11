import React, { useState} from "react";
import ForecastDay from "./ForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

if (loaded) {
   return (
     <div className="WeatherForecast">
       <div className="row">
         {forecast.map(function(dailyForecast, index) {
           if (index < 5) {
             return (
               <div className="col" key={index}>
                 <ForecastDay data={dailyForecast} />
               </div>
             );
           }
         })}
       </div>
     </div>
   );
} else {
   let apiKey = "1f5fdcf1ceb4ff37fcotf403ad4e9bc8";
   let longitude = props.coordinates.longitude;
   let latitude = props.coordinates.latitude;
   let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);

   return null;
}

}