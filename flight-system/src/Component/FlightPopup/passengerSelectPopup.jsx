import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import {
  setPassenger,
  setTravelClass,
} from "../../assets/redux/feature/flightSearch/SearchSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PassengerSelectPopup({ setClosePopup }) {
  const passengerTypes = [
    { key: "adult", label: "Adult", desc: "12 years & above" },
    { key: "child", label: "Child", desc: "2 - 11 years" },
    { key: "kid", label: "Kid", desc: "Under 2 years" },
    { key: "infant", label: "Infant", desc: "On lap, under 2" },
  ];

  const dispatch = useDispatch();
  const pasenger = useSelector((state) => state.flightSearch.passengers);

  // data passing to redux slice
  const handleChange = (type, delta) => {
    dispatch(setPassenger({ type, delta }));
  };

  let totalPass = Object.values(pasenger).reduce((acc, curr) => acc + curr, 0);

  return (
    <div
      className="w-[350px] rounded-xl bg-white p-6 font-[Poppins] border border-gray-200"
      style={{
        fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
        boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.10)",
      }}
    >
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800 tracking-wide">
          Travelers & Booking Class
        </p>
      </div>
      <div className="space-y-3 mb-5">
        {passengerTypes.map((type) => (
          <div
            key={type.key}
            className="flex justify-between items-center rounded-lg px-2 py-2 hover:bg-green-50 transition"
          >
            <div className="flex gap-2 items-center">
              <span className="bg-green-100 text-green-600 rounded-full p-2 shadow-sm flex items-center justify-center">
                <FaRegUser size={20} />
              </span>
              <div>
                <span className="block text-sm font-medium text-gray-700">
                  {type.label}
                </span>
                <span className="text-xs text-gray-400">{type.desc}</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="rounded-full border border-green-200 bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-150 p-0.5 shadow-sm disabled:opacity-40"
                style={{
                  fontSize: "16px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => handleChange(type.key, -1)}
                disabled={
                  type.key === "adult"
                    ? pasenger[type.key] <= 1
                    : pasenger[type.key] === 0
                }
              >
                <CiCircleMinus size={20} />
              </button>
              <span className="text-base font-semibold text-gray-700 min-w-[16px] text-center select-none">
                {pasenger[type.key]}
              </span>
              <button
                className="rounded-full border border-green-200 bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-150 p-0.5 shadow-sm"
                style={{
                  fontSize: "16px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                disabled={
                  type.key === "infant"
                    ? pasenger.adult === pasenger.infant || totalPass >= 9
                    : totalPass === 9
                }
                onClick={() => handleChange(type.key, 1)}
              >
                <CiCirclePlus size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cabin Class
        </label>
        <Select onValueChange={(value) => dispatch(setTravelClass(value))}>
          <SelectTrigger className="w-full h-9 border border-gray-300 rounded px-3 text-gray-700 bg-white text-sm">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="premium">Premium Economy</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="first">First</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={() => setClosePopup(false)}
          className="rounded-full px-6 py-2 bg-green-500 text-white text-sm font-semibold shadow-md hover:bg-green-600 transition"
          style={{ minWidth: 80 }}
        >
          Done
        </button>
      </div>
    </div>
  );
}
