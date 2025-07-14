import React, { useContext, useState } from "react";
import { locationContext } from "../../Context";
import heart from "../../assets/icons/heart.svg";
import useWeather from "../../Hooks/useWeather";
export default function LoceationPopup() {
  const [openFavorites, setOpenFavorits] = useState(false);
  const { favoritLocation, setFavoritLocation } = useContext(locationContext);
  const { fetchWeatherData } = useWeather();
  console.log("jjjj", fetchWeatherData);
  const handleGetLocation = (location) => {
    fetchWeatherData(location.latitude, location.longitude);
    console.log("this is kabir", location.latitude, location.longitude);
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
          {favoritLocation.map((location) => (
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
              <li
                onClick={() => handleGetLocation(location)}
                className="hover:bg-gray-200"
              >
                {location.city}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
