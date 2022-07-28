import React from "react";
import HeaderDate from "./HeaderDate";
import HeaderForm from "./HeaderForm";


import "./Header.css";

export default function Header() {
  return (
    <div className="card" id="card">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <HeaderDate day="Friday" time="18:33" date="July 15, 2022" />
          </div>
          <div className="col">
            <HeaderForm />
          </div>
        </div>
      </div>
    </div>
  );
}
