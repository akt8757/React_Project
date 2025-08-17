import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useContext } from "react";
import { TripContext } from "@/Provider/provider";
import { useDispatch, useSelector } from "react-redux";
import {
  setAirPortData,
  setTrip,
} from "../assets/redux/feature/flightSearch/SearchSlice";

export default function TripOption() {
  const { selectedTrip, setSelectedTrip } = useContext(TripContext);

  const selector = useSelector((state) => state.flightSearch.selectedTrip);
  const state = useSelector((state) => state.flightSearch.trips);
  console.log("destination", state);
  const dispatch = useDispatch();

  // console.log("redux store", selector);
  const handleChangeValue = (value) => {
    setSelectedTrip(value);
    dispatch(setTrip(value));
  };
  return (
    <div className="ml-8 mt-10">
      <RadioGroup
        className="flex"
        defaultValue="on-way"
        value={selectedTrip}
        onValueChange={handleChangeValue}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="  data-[state=checked]:bg-green-500 "
            value="on-way"
            id="on-way"
          />
          <Label htmlFor="on-way" className="text-gray-700">
            On way
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="  data-[state=checked]:bg-green-500 "
            value="round-trip"
            id="round-trip"
          />
          <Label htmlFor="round-trip" className="text-gray-700">
            Round trip
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="  data-[state=checked]:bg-green-500 "
            value="multi-city"
            id="multi-city"
          />
          <Label htmlFor="multi-city" className="text-gray-700">
            Multi city
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
