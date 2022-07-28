import React from "react";

import "./CentralCard.css";

export default function CentralCity(props) {
  return (
    <div className="card" id="centeralCard">
      <div className="card-body py-0">
        <div className="row">
          <div className="col">
            <h1 className="searchCity">
              <span id="searchCity">{props.city}</span>,
              <span id="cityCountry"></span>
            </h1>
            <h3 className="description" id="description">
              {props.weather}
            </h3>
            <div>
              <ul className="todayAnother">
                <li>
                  Humidity: <span id="currentHumidity">{props.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="currentWind">{props.wind}</span> m/sec
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
                {props.t}
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
