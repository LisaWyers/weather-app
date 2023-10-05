import React from "react";

function ForecastDetails(props) {
  const { humidity, direction, windSpeed, temperature, date } = props;

  const formattedDate = new Date(date).toDateString();

  function getByTextWithFallback(text) {
    try {
      return screen.getByText(text);
    } catch (error) {
      return null;
    }
  }

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details_humidity">{humidity}</div>
      <div className="forecast-details_direction">{direction}</div>
      <div className="forecast-details_windspeed">{windSpeed}</div>
      <div className="forecast-details_temperature">
        {temperature && temperature.max !== undefined
          ? `${temperature.max} °C`
          : "N/A"}
      </div>

      <div className="forecast-details_date">{formattedDate}</div>
    </div>
  );
}

export default ForecastDetails;
