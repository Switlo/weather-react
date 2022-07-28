import React from "react";

import "./Header.css";

export default function HeaderDate(props) {
  return (
    <div className="today">
      <div>
        <span id="weekDay">{props.day}</span>,{" "}
        <span id="currentTime">{props.time}</span>
      </div>
      <div>
        <span id="currentDate">{props.date}</span>
      </div>
    </div>
  );
}