import React from "react";
import "./Header.css";   
      

export default function CentralCity (props) {
  console.log(props.data)
  if (!props.data) {return <div></div>} 

 const{name,
  sys:{country},
  main:{temp, humidity},
  weather,
  wind:{speed},
  // icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`  
 } = props.data

  return (
    <div className="card" id="centralCard">
      <div className="card-body py-0">
        <div className="row">
          <div className="col">
            <h1 className="searchCity">
              {name}, {country}
            </h1>
            <h3 className="description" id="description">
              {weather[0].description}
            </h3>
            <div>
              <ul className="todayAnother">
                <li>
                  Humidity: <span id="currentHumidity">{humidity}</span>%
                </li>
                <li>
                  Wind: <span id="currentWind">{speed}</span> m/sec
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny_s_cloudy.png"
              alt=" "
              id="icon"
            />
            <div className="temperature-units">
              <span className="temperature" id="temperature">
                {temp}
              </span>
              <span className="units">
                <a href="#top" id="celsius-link" className="active">
                  °C
                </a>
                |
                <a href="#top" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}
