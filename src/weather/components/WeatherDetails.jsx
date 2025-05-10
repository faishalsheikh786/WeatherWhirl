function WeatherDetails({ data }) {
  return (
    <div className="bottom">
      <div className="feels">
        <p className="bold">{data.main.feels_like.toFixed()}°C</p>
        <p>Feels Like</p>
      </div>
      <div className="humidity">
        <p className="bold">{data.main.humidity}%</p>
        <p>Humidity</p>
      </div>
      <div className="wind">
        <p className="bold">{data.wind.speed.toFixed()} m/s</p>
        <p>Wind Speed</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
