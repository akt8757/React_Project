import React from "react";
import { SlCalender } from "react-icons/sl";
import { DatePicker } from "antd";
import { useContext } from "react";
import { TripContext } from "../../Provider/provider";
import { FlightContext } from "../../Provider/provider";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en";
import { useDispatch } from "react-redux";
import { setAirPortData } from "../../assets/redux/feature/flightSearch/SearchSlice";
dayjs.extend(weekday);
dayjs.extend(localizedFormat);

export default function FlyDate({ index }) {
  // const { changePopup, setChangePopup } = useContext(FlightContext);
  const { RangePicker } = DatePicker;
  // const flag = changePopup === "arivel";
  const initialDate = dayjs().add(2, "day");
  const dispatch = useDispatch();

  const initialDates = [dayjs().add(2, "day"), dayjs().add(5, "day")];
  const { selectedTrip } = useContext(TripContext);
  const handleDate = (value) => {
    let getDate = null;
    let getdateOne = null;
    let getDateTwo = null;

    if (Array.isArray(value) && value.length === 2) {
      getdateOne = dayjs(value[0]).format("YYYY-MM-DD");
      getDateTwo = dayjs(value[1]).format("YYYY-MM-DD");
    } else if (value) {
      getDate = dayjs(value).format("YYYY-MM-DD");
    }

    console.log("date", getDate);
    dispatch(setAirPortData({ getdateOne, getDateTwo, getDate, index }));
  };

  return (
    <div className="col-span-2  border-green-400 border rounded-2xl">
      <div className="flex items-center gap-1 justify-center p-2">
        <SlCalender />
        <p className="text-gray-500">Travel Date</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {selectedTrip === "on-way" && (
          <DatePicker
            defaultValue={initialDate}
            format="DD MMM YYYY ddd"
            onChange={handleDate}
            // open={flag}
            // onOpenChange={(open) =>
            //   open ? setChangePopup("arivel") : setChangePopup("date")
            // }
          />
        )}
        {selectedTrip === "round-trip" && (
          <RangePicker
            value={initialDates}
            format="DD MMM YYYY ddd"
            onChange={handleDate}
            // open={flag}
            // onOpenChange={(open) =>
            //   open ? setChangePopup("arivel") : setChangePopup("date")
            // }
          />
        )}
        {selectedTrip === "multi-city" && (
          <DatePicker
            defaultValue={dayjs()}
            format="YYYY-MM-DD"
            onChange={handleDate}
            // open={flag}
            // onOpenChange={(open) =>
            //   open ? setChangePopup("arivel") : setChangePopup("date")
            // }
          />
        )}
      </div>
    </div>
  );
}
