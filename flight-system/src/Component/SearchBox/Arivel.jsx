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

export default function Arivel() {
  const { airport, changePopup, setChangePopup } = useContext(FlightContext);
  const Airport = airport[1];
  const [arivelPopup, setArivelPopup] = useState(false);

  return (
    <Popover
      open={changePopup === "departure"}
      onOpenChange={(open) =>
        open ? setChangePopup("departure") : setChangePopup(false)
      }
    >
      <div>
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
                {Airport.city_name}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-[12px]">
                {Airport.airport_name}
              </p>
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent className="bg-transperent border-none shadow-none">
          <DestinationPopup />
        </PopoverContent>
      </div>
    </Popover>
  );
}
