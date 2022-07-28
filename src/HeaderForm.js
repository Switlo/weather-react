import React from "react";

import "./Header.css";

export default function HeaderForm() {
  return (
    <div className="HeaderForm">
      <form className="typeCity" id="formaCity">
        <input
          className="form-control form-control-sm"
          type="search"
          id="city-input"
          placeholder="Type a city and press Enter"
          autofocus="on"
          autocomplete="off"
        />
      </form>
    </div>
  );
}
