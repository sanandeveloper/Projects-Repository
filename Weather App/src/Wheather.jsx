import { useState } from "react";
import "./App.css";

function Wheather() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const apiKey = 'a2a0733997358f032e1902c7b6be6e54';

  const handleSearch = async () => {
    if (!input) {
      setError("Please enter a city name");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`
      );
      
    if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      console.log('data=>',data)
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Weather App</h1>

        <div className="flex mb-6">
          <input
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter city name"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-200"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {weatherData && (
          <div className="space-y-6">
            <div className="text-center">
              <img
                className="mx-auto w-24 h-24"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
              />
              <h1 className="text-4xl font-bold text-gray-800 my-2">
                {Math.round(weatherData.main.temp)} °C
              </h1>
              <p className="text-xl text-gray-600">{weatherData.name}</p>
              <p className="text-gray-500 capitalize">{weatherData.weather[0].description}</p>
            </div>

            <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
              <div className="text-center">
                <h1 className="text-gray-600 font-medium">Humidity <i className="ri-water-percent-fill"></i></h1>
                <p className="text-lg font-semibold">{weatherData.main.humidity}%</p>
              </div>
              <div className="text-center">
                <h1 className="text-gray-600 font-medium">Wind Speed <i className="ri-windy-line"></i></h1>
                <p className="text-lg font-semibold">{weatherData.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wheather;