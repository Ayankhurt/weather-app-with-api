import axios from 'axios';
import { useState } from 'react';

const Home = () => {
  const [weather, setWeather] = useState({});
  const [cityName, setCityName] = useState('');

  let baseurl = "https://backend-project-9px3.vercel.app/";

  const getWeather = (e) => {
    e.preventDefault();
    if (!cityName) return;

    axios
      .get(`${baseurl}get-weather/${cityName}`)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };

  return (
    <div className="container">
      <form onSubmit={getWeather}>
        <label>
          City:
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </label>
        <button type="submit">Get Weather</button>
      </form>

      {weather.City && (
        <div className="weather-info">
          <h1>City: {weather.City}</h1>
          <h1>Temperature: {weather.temperature}°C</h1>
          <h1>Humidity: {weather.humidity}%</h1>
          <h1>Wind: {weather.wind}</h1>
          <h1>Min: {weather.min}°C</h1>
          <h1>Max: {weather.max}°C</h1>
          <h1>Feels Like: {weather.feelslike}°C</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
// end //