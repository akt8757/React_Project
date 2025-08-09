import React from "react";
import { Input } from "@/Components/ui/Input";
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useContext } from "react";
import { FlightContext } from "../../Provider/provider";

export default function DestinationPopup({ activePopup }) {
  const defaultAirport = [
    {
      airport_code: "DAC",
      airport_name: "Hazrat Shahjalal International Airport",
      city_name: "Dhaka",
      country_name: "Bangladesh",
    },
    {
      airport_code: "CGP",
      airport_name: "Shah Amanat International",
      city_name: "Chittagong",
      country_name: "Bangladesh",
    },
    {
      airport_code: "SPD",
      airport_name: "Saidpur",
      city_name: "Saidpur",
      country_name: "Bangladesh",
    },
    {
      airport_code: "CXB",
      airport_name: "Cox's Bazar",
      city_name: "Cox's Bazar",
      country_name: "Bangladesh",
    },
    {
      airport_code: "BZL",
      airport_name: "Barisal Airport",
      city_name: "Barisal",
      country_name: "Bangladesh",
    },
    {
      airport_code: "JSR",
      airport_name: "Jessore",
      city_name: "Jessore",
      country_name: "Bangladesh",
    },
    {
      airport_code: "RJH",
      airport_name: "Rajshahi",
      city_name: "Rajshahi",
      country_name: "Bangladesh",
    },
    {
      airport_code: "ZYL",
      airport_name: "Sylhet Civil",
      city_name: "Sylhet",
      country_name: "Bangladesh",
    },
  ];

  const { setAirport, setChangePopup } = useContext(FlightContext);

  const handleAirportName = (item) => {
    setAirport((prev) => {
      if (activePopup === "departure") {
        return [
          {
            airport_code: item.airport_code,
            airport_name: item.airport_name,
            city_name: item.city_name,
            country_name: item.country_name,
          },
          prev[1],
        ];
      } else {
        return [
          prev[0],
          {
            airport_code: item.airport_code,
            airport_name: item.airport_name,
            city_name: item.city_name,
            country_name: item.country_name,
          },
        ];
      }
    });

    activePopup === "departure"
      ? setChangePopup("departure")
      : setChangePopup("arivel");
  };

  return (
    <div className="  ">
      <div className="w-[350px] bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-white px-6 py-4 flex items-center gap-3 border-b border-gray-200">
          <CiLocationOn className="text-green-500 text-3xl" />
          <h2 className="text-xl font-bold text-gray-800 tracking-wide">
            Choose Destination
          </h2>
        </div>
        {/* Search Input */}
        <div className="relative px-6 py-5 bg-white">
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-gray-400 text-2xl">
            <IoSearchOutline />
          </div>
          <Input
            className="pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200 shadow text-base placeholder:text-gray-400"
            type="text"
            placeholder="Search for a city or airport..."
          />
        </div>
        {/* Destinations List with Slider */}
        <div className="px-6 pb-6 max-h-80 overflow-y-auto custom-scrollbar">
          {defaultAirport.map((item) => (
            <div
              onClick={() => handleAirportName(item)}
              key={item.airport_code}
              className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm transition-all duration-200 hover:bg-gray-100 cursor-pointer mb-3 last:mb-0 border border-gray-100"
            >
              <div className="flex-shrink-0">
                <CiLocationOn className="text-green-500 text-2xl" />
              </div>
              <div className="flex flex-col flex-grow">
                <p className="font-semibold text-gray-800 text-base">
                  {item.airport_name}
                </p>
                <p className="text-gray-500 text-xs">{item.city_name}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-green-700 text-xs font-bold border border-green-200">
                {item.airport_code}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Custom scrollbar styles */}
      <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                            width: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #e5e7eb;
                            border-radius: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                            background: transparent;
                    }
            `}</style>
    </div>
  );
}
