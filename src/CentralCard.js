import React from "react";
import CentralCity from "./CentralCity";
import CentralAphorism from "./CentralAphorism";

import "./CentralCard.css";

export default function CentralCard() {
  return (
    <div className="row g-0">
      <div className="col">
        <CentralCity
          city="Kyiv"
          weather="cloudy"
          humidity="84"
          wind="3"
          t="20"
        />
      </div>
      <div className="col">
        <CentralAphorism />
      </div>
    </div>
  );
}
