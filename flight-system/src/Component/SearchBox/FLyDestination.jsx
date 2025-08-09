import { AiOutlineSwap } from "react-icons/ai";
import DestinationPopup from "../FlightPopup/DestinationPopup";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Departure from "./Departure";
import Arivel from "./Arivel";

export default function FLyDestination() {
  return (
    <div className="col-span-3 relative">
      <div className="grid grid-cols-2 gap-3 relative">
        <Departure />
        <Arivel />
      </div>
      <div className="absolute  left-0 right-0 top-6.5 pointer-events-none">
        <div className="bg-green-600  text-white border rounded-full w-9 h-9 flex items-center justify-center m-auto pointer-events-auto">
          <AiOutlineSwap />
        </div>
      </div>
    </div>
  );
}
