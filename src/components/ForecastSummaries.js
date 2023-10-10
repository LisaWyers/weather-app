import React from "react";
import "../styles/ForecastSummaries.css";
import ForecastSummary from "./ForecastSummary";

function ForecastSummary(props) {
  const { date, icon, temperature, description, onSelect } = props;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">...</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">...</div>
      <div className="forecast-summary__temperature">...</div>
      <div className="forecast-summary__description">...</div>
      <button type="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
};

export default ForecastSummaries;
