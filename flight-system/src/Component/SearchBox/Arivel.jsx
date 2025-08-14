import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import DestinationPopup from "../FlightPopup/DestinationPopup";
import { useContext } from "react";
import { FlightContext } from "../../Provider/provider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { setFlightDestination } from "../../assets/redux/feature/flightSearch/SearchSlice";
import { useDispatch } from "react-redux";

export default function Arivel({ arrival, index }) {
  // const { changePopup, setChangePopup } = useContext(FlightContext);
  const [arivelPopup, setArivelPopup] = useState(false);
  const dispatch = useDispatch();

  const handleArrival = () => {
    const destination = "arrival";
    dispatch(setFlightDestination(destination));
  };

  return (
    <Popover
    // open={changePopup === "departure"}
    // onOpenChange={(open) =>
    //   open ? setChangePopup("departure") : setChangePopup(false)
    // }
    >
      <div onClick={handleArrival}>
        <PopoverTrigger asChild>
          <div
            onClick={() => setArivelPopup(!arivelPopup)}
            className="px-2 py-2 border-green-400 border rounded-2xl text-end cursor-pointer"
          >
            <div className="flex gap items-center justify-end text-green-500">
              <p className="text-gray-400">To</p>
              <IoLocationOutline />
            </div>
            <div>
              <p className="text-gray-700 font-medium my-1">
                {arrival.arrival_city_name}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-[12px]">
                {arrival.arrival_airport_name}
              </p>
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent className="bg-transperent border-none shadow-none">
          <DestinationPopup index={index} destination="arrival" />
        </PopoverContent>
      </div>
    </Popover>
  );
}
