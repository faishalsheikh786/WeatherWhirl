import { getWeatherIcon } from "../utils/utils.js";

function WeatherTop({ data }) {
  return (
    <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main && <h1>{data.main.temp.toFixed()}°C</h1>}
      </div>
      <div className="description">
        {data.weather && data.weather[0] && (
          <p>
            {getWeatherIcon(data.weather[0].main)} {data.weather[0].main}
          </p>
        )}
      </div>
    </div>
  );
}

export default WeatherTop;
