import React from "react";
import { MulticityContext } from "@/Provider/provider";
import { useContext } from "react";
import FLyDestination from "../SearchBox/FLyDestination";
import FlyDate from "../SearchBox/FlyDate";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { IoAddCircle } from "react-icons/io5";
import { TripContext } from "../../Provider/provider";

export default function AddMultiCity() {
  const { addCity, setAddCity } = useContext(MulticityContext);
  const { selectedTrip } = useContext(TripContext);

  // Remove City
  const handleRemoveCity = (id) => {
    const filtaredData = addCity.filter((item) => item.id !== id);
    setAddCity(filtaredData);
  };

  //  add City
  const handleAddCity = () => {
    const newItem = { id: crypto.randomUUID() };
    setAddCity([...addCity, newItem]);
  };
  const roundTrip = selectedTrip === "round-trip";
  const onWay = selectedTrip === "on-way";
  return (
    <div>
      {onWay || roundTrip ? null : (
        <div>
          <div>
            {addCity.length > 0 &&
              addCity.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-6 gap-3 px-5 mt-10 "
                >
                  <FLyDestination />
                  <FlyDate />
                  <div className="flex justify-center items-center">
                    <Button
                      onClick={() => handleRemoveCity(item.id)}
                      className="  bg-white border border-green-500 text-green-400 hover:bg-green-500 hover:text-white flex items-center gap-2"
                    >
                      <IoRemoveCircleOutline />
                      Remove City
                    </Button>
                  </div>
                </div>
              ))}
          </div>
          <div className="  mt-5 ml-5 ">
            <Button
              disabled={addCity.length >= 4}
              onClick={handleAddCity}
              className="  bg-white border border-green-500 text-green-400 hover:bg-green-500 hover:text-white flex items-center gap-2"
            >
              <IoAddCircle />
              Add More Flight
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
