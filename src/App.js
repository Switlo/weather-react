import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderDate from "./HeaderDate";
import HeaderForm from './HeaderForm';
import CentralCity from './CentralCity';
import CentralAphorism from './CentralAphorism';
import NextDays from './NextDays';
import Footer from "./Footer";

import "./App.css";

export default function App() {

const [data, setData] = useState(null);
const [city, setCity] = useState("Kyiv");

useEffect(() => {
  async function fetchMyAPI(city="Kyiv") {
    const apiKey = "edb5073dfa06a01ce33233d517b9358c";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    let response = await fetch(apiUrl)
    response = await response.json()
    setData(response)
  }

  fetchMyAPI(city)
}, [city])

const handleCityChange = (event) => {setCity(event.target.value)};



  return (
    <div className="App">
      <div className="container" id="container">
        <div className="card" id="card">
          <div className="card-body">
             <div className="row">
                <div className="col">
                  <HeaderDate />
                </div>
                <div className="col">
                  <HeaderForm onChange={handleCityChange}/>
                </div>
              </div>
          </div>
        </div>
          <div className="row g-0">
            <div className="col">
              <CentralCity data={data}/> 
            </div>
             <div className="col">
              <CentralAphorism />
            </div>
          </div>
          <div>
            <NextDays />
          </div>
      </div>
      <div>
          <Footer />
      </div>
    </div>
    
  );
}