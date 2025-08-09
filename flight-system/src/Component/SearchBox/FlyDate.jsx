import React from "react";
import { SlCalender } from "react-icons/sl";
import { DatePicker } from "antd";
import { useContext } from "react";
import { TripContext } from "../../Provider/provider";
import { FlightContext } from "../../Provider/provider";

export default function FlyDate() {
  const { changePopup, setChangePopup } = useContext(FlightContext);
  const { RangePicker } = DatePicker;
  const flag = changePopup === "arivel";

  const { selectedTrip } = useContext(TripContext);
  return (
    <div className="col-span-2  border-green-400 border rounded-2xl">
      <div className="flex items-center gap-1 justify-center p-2">
        <SlCalender />
        <p className="text-gray-500">Travel Date</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {selectedTrip === "on-way" && (
          <DatePicker
            open={flag}
            onOpenChange={(open) =>
              open ? setChangePopup("arivel") : setChangePopup("date")
            }
          />
        )}
        {selectedTrip === "round-trip" && (
          <RangePicker
            open={flag}
            onOpenChange={(open) =>
              open ? setChangePopup("arivel") : setChangePopup("date")
            }
          />
        )}
        {selectedTrip === "multi-city" && (
          <DatePicker
            open={flag}
            onOpenChange={(open) =>
              open ? setChangePopup("arivel") : setChangePopup("date")
            }
          />
        )}
      </div>
    </div>
  );
}
