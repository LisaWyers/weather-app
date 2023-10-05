import "../styles/App.css";
import React from "react";
import ForecastSummaries from "./ForecastSummaries";
import ForecastSummary from "./ForecastSummary";
import LocationDetails from "./LocationDetails";

function App({ location, forecasts }) {
  const { city, country } = location;
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;
