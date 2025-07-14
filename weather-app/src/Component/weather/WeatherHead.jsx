import React from "react";
import pin from "../../assets/icons/pin.svg";

export default function WeatherHead({ weatherHedData }) {
  const data = weatherHedData;
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={data.icon} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(data.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} alt="img" />
            <h2 className="text-2xl lg:text-[50px]">{data.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
    </div>
  );
}
