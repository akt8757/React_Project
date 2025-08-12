import React, { useContext } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import FlyDate from "./SearchBox/FlyDate";
import SelectPasenger from "./SearchBox/SelectPasenger";
import Departure from "./SearchBox/Departure";
import Arivel from "./SearchBox/Arivel";
import { useSelector, useDispatch } from "react-redux";
import { TripContext } from "../Provider/provider";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { IoAddCircle } from "react-icons/io5";
import { setSwapObject } from "../assets/redux/feature/flightSearch/SearchSlice";
import {
  setAddCity,
  setRemoveCity,
} from "../assets/redux/feature/flightSearch/SearchSlice";

export default function MainSearchBox() {
  const { selectedTrip } = useContext(TripContext);
  const flightOption = useSelector((state) => state.flightSearch.trips);

  const dispatch = useDispatch();

  //  add City
  const handleAddCity = () => {
    dispatch(setAddCity("add"));
  };

  // Remove City
  const handleRemoveCity = (index) => {
    dispatch(setRemoveCity(index));
  };
  //swap airport
  const handleSwap = (index) => {
    dispatch(setSwapObject(index));
  };
  let logiCalTrip = null;

  if (selectedTrip === "on-way" || selectedTrip === "round-trip") {
    const trip = flightOption[0];
    const onway = [trip];
    logiCalTrip = (
      <>
        {onway.map((flight, index) => (
          <div key={index} className="grid grid-cols-6 gap-3 px-5 mt-10">
            <div className="col-span-3 relative">
              <div className="grid grid-cols-2 gap-3 relative">
                <Departure departure={flight} index={index} />
                <Arivel arrival={flight} index={index} />
              </div>
              <div className="absolute  left-0 right-0 top-6.5 pointer-events-none">
                <div
                  onClick={() => handleSwap(index)}
                  className="bg-green-600  text-white border rounded-full w-9 h-9 flex items-center justify-center m-auto pointer-events-auto"
                >
                  <AiOutlineSwap />
                </div>
              </div>
            </div>
            <FlyDate index={index} />
            <SelectPasenger index={index} />
          </div>
        ))}
      </>
    );
  } else if (selectedTrip === "multi-city") {
    logiCalTrip = (
      <>
        {flightOption.map((flight, index) => (
          <div key={index} className="grid grid-cols-6 gap-3 px-5 mt-10">
            <div className="col-span-3 relative">
              <div className="grid grid-cols-2 gap-3 relative">
                <Departure departure={flight} index={index} />
                <Arivel arrival={flight} index={index} />
              </div>
              <div className="absolute  left-0 right-0 top-6.5 pointer-events-none">
                <div
                  onClick={() => handleSwap(index)}
                  className="bg-green-600  text-white border rounded-full w-9 h-9 flex items-center justify-center m-auto pointer-events-auto"
                >
                  <AiOutlineSwap />
                </div>
              </div>
            </div>
            <FlyDate index={index} />
            {index === 0 ? null : (
              <div className="flex justify-center items-center">
                <Button
                  onClick={() => handleRemoveCity(index)}
                  className="  bg-white border border-green-500 text-green-400 hover:bg-green-500 hover:text-white flex items-center gap-2"
                >
                  <IoRemoveCircleOutline />
                  Remove City
                </Button>
              </div>
            )}
            {index === 0 && <SelectPasenger index={index} />}
          </div>
        ))}

        <div className="mt-5 ml-5">
          <Button
            disabled={flightOption.length >= 5}
            onClick={handleAddCity}
            className="  bg-white border border-green-500 text-green-400 hover:bg-green-500 hover:text-white flex items-center gap-2"
          >
            <IoAddCircle />
            Add More Flight
          </Button>
        </div>
      </>
    );
  }

  return logiCalTrip;
}
