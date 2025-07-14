import React, { useContext } from "react";
import heart from "../../assets/icons/heart.svg";
import { locationContext } from "../../Context";
export default function Favorit({ weatherFevorit }) {
  const { favoritLocation, setFavoritLocation } = useContext(locationContext);
  const handleLocation = (data) => {
    const getFavoritLocation = {
      ...favoritLocation,
      city: data.location,
      latitude: data.latitude,
      longitude: data.longtitude,
    };
    setFavoritLocation([getFavoritLocation]);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={() => handleLocation(weatherFevorit)}
          className=" cursor-pointer text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={heart} alt="img" />
        </button>
      </div>
    </div>
  );
}
