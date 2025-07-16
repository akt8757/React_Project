import { useEffect, useState } from "react";

const useWeather = () => {
  const [weather, setWeather] = useState({
    location: "",
    temperature: "",
    humidity: "",
    tempMax: "",
    tempMin: "",
    Cloudy: "",
    Wind: "",
    latitude: "",
    longtitude: "",
    date: "",
    icon: "",
  });
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setloading(true);
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;
      const response = await fetch(url);
      const data = await response.json();
      const updateWeather = {
        ...weather,
        location: data.location.name,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        tempMax: data.current.heatindex_c,
        tempMin: data.current.dewpoint_c,
        Cloudy: data.current.cloud,
        Wind: data.current.wind_kph,
        latitude: data.location.lat,
        longtitude: data.location.lon,
        date: data.location.localtime,
        icon: data.current.condition.icon,
      };
      setWeather(updateWeather);
    } catch (err) {
      setError(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    setloading(true);

    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weather,
    loading,
    error,
    fetchWeatherData,
  };
};
export default useWeather;
