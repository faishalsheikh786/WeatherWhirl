import { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import SearchBar from "../components/SearchBar";
import WeatherTop from "../components/WeatherTop";
import WeatherDetails from "../components/WeatherDetails";
import SunInfo from "../components/SunInfo";

function Weather() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "895284fb2d2c50a520ea537456963d9c";

  const fetchWeather = (city) => {
    setLoading(true);
    setError(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Place not found. Please try a different location.");
        setLoading(false);
      });
  };

  const fetchWeatherByCoords = (lat, lon) => {
    setLoading(true);
    setError(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to fetch weather for your location.");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          fetchWeather("Hyderabad"); // Fallback
        }
      );
    } else {
      fetchWeather("Hyderabad"); // Fallback
    }
  }, []);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetchWeather(location);
      setLocation("");
    }
  };

  return (
    <>
      <div className="intro">
        <h2>WeatherApp</h2>
      </div>
      <div className="app">
        <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation} />
        <div className="container">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : data ? (
            <>
              <WeatherTop data={data} />
              <WeatherDetails data={data} />
              {data.sys && <SunInfo sunrise={data.sys.sunrise} sunset={data.sys.sunset} />}
            </>
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
