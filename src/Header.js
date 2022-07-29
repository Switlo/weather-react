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
            <HeaderDate />
          </div>
          <div className="col">
            <HeaderForm />
          </div>
        </div>
      </div>
    </div>
  );
}
