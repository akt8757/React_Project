import { MdPeopleAlt } from "react-icons/md";
import PassengerSelectPopup from "../FlightPopup/passengerSelectPopup";
import { useContext } from "react";
import { FlightContext } from "../../Provider/provider";
import { useSelector } from "react-redux";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SelectPasenger() {
  const passengers = useSelector((state) => state.flightSearch.passengers);
  const travelClass = useSelector((state) => state.flightSearch.cabin_class);

  const { changePopup, setChangePopup } = useContext(FlightContext);

  let totalPass = Object.values(passengers).reduce(
    (acc, curr) => acc + curr,
    0
  );
  return (
    <Popover
      open={changePopup === "date"}
      onOpenChange={(isOpen) =>
        isOpen ? setChangePopup("date") : setChangePopup(false)
      }
    >
      <div className="relative">
        <PopoverTrigger asChild>
          <div className="col-span-1 px-2 py-2 border-green-400 border rounded-2xl">
            <div className="flex gap-2 items-center text-green-500">
              <MdPeopleAlt />
              <p className="text-gray-400">Traveler & Class</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium my-1">
                {totalPass} Traveler
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">{travelClass}</p>
            </div>
          </div>
        </PopoverTrigger>
        <div className="absolute top-25 left-[-80px] right-0 bottom-0 z-10 ">
          <PopoverContent
            align="center"
            className="bg-transperent border-none shadow-none"
          >
            <PassengerSelectPopup setClosePopup={setChangePopup} />
          </PopoverContent>
        </div>
      </div>
    </Popover>
  );
}
