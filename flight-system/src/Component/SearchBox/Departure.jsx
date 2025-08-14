import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import DestinationPopup from "../FlightPopup/DestinationPopup";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { setFlightDestination } from "../../assets/redux/feature/flightSearch/SearchSlice";
import { useDispatch } from "react-redux";

export default function Departure({ departure, index }) {
  // const [departurePopup, setDeparturePopup] = useState(false);
  // const [activePopup, setActivePopup] = useState(null);
  const dispatch = useDispatch();

  const handleDeparture = () => {
    const destination = "departure";
    dispatch(setFlightDestination(destination));
  };

  return (
    <Popover
    // open={departurePopup}
    // onOpenChange={(open) => {
    //   setDeparturePopup(open);
    //   if (open) setActivePopup("departure");
    // }}
    >
      <div onClick={handleDeparture}>
        <PopoverTrigger asChild>
          <div className="px-2 py-2 border-green-400 border rounded-2xl">
            <div
              // onClick={() => setDeparturePopup(!departurePopup)}
              className="cursor-pointer select-none"
            >
              <div className="flex gap-1 items-center text-green-500">
                <IoLocationOutline />
                <p className="text-gray-400">Form</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium my-1">
                  {departure.departure_city_name}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-[12px]">
                  {departure.departure_airport_name}
                </p>
              </div>
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent className="bg-transperent border-none shadow-none w-64 ">
          <DestinationPopup
            // activePopup={activePopup}
            index={index}
            destination="departure"
          />
        </PopoverContent>
      </div>
    </Popover>
  );
}
