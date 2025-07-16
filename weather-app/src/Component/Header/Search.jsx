import React, { useContext, useState } from "react";
import search from "../../assets/icons/search.svg";
import { data } from "../../data/data";
import { weatherContext } from "../../Context";

export default function Search() {
  const [isPopup, setIsPopup] = useState(false);
  const [value, setValue] = useState("");
  const [location, setLocation] = useState(data);
  const { WeatherData } = useContext(weatherContext);
  const { fetchWeatherData } = WeatherData;

  const handleChange = (e) => {
    e.preventDefault();
    const inputVal = e.target.value;
    setValue(inputVal);
    const filtaredData = data.filter((item) =>
      item.location.toLowerCase().includes(inputVal.toLowerCase())
    );
    if (inputVal === "") {
      setLocation(data);
    } else if (filtaredData.length > 0) {
      setLocation(filtaredData);
    }
  };

  const handleSubmit = () => {
    const searchData = getSearchLocation(value);
  };

  const handleUserLocation = (item) => {
    fetchWeatherData(item.latitude, item.longitude);
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            value={value}
            onChange={handleChange}
            onClick={() => setIsPopup(!isPopup)}
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            required
          />
          <button type="submit">
            <img src={search} />
          </button>
        </div>
      </form>
      {isPopup && (
        <div className="w-65 overflow-y-auto h-50 py-4 bg-white rounded-md border-gray-500 absolute right-45 top-12 text-black shadow-lg ">
          <h3 className="text-lg font-bold px-4">All location</h3>

          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
            {location.map((item) => (
              <li
                onClick={() => handleUserLocation(item)}
                key={item.location}
                className="hover:bg-gray-200"
              >
                {item.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
