import React, { useContext, useState } from "react";
import { locationContext } from "../../Context";
import heart from "../../assets/icons/heart.svg";
import { weatherContext } from "../../Context";

export default function LoceationPopup() {
  const [openFavorites, setOpenFavorits] = useState(false);
  const { favoritLocation, setFavoritLocation } = useContext(locationContext);
  const { WeatherData } = useContext(weatherContext);
  const { fetchWeatherData } = WeatherData; //it's a function

  const handleGetLocation = (location) => {
    fetchWeatherData(location.latitude, location.longitude);
  };

  return (
    <div>
      <button
        onClick={() => setOpenFavorits(!openFavorites)}
        className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      >
        <img src={heart} alt="img" />
        <span>Favourite Locations</span>
      </button>

      {openFavorites && (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
          <h3 className="text-lg font-bold px-4">Favourite Locations</h3>

          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
            {favoritLocation.map((item) => (
              <li
                key={item.city}
                onClick={() => handleGetLocation(item)}
                className="hover:bg-gray-200"
              >
                {item.city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
