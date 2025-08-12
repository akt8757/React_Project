import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { GiPapers } from "react-icons/gi";
import { IoBusOutline } from "react-icons/io5";
export default function ServicOption() {
  return (
    <div>
      <div className="">
        <div>
          <div>
            <div className="">
              <div className="flex justify-center bg-gray-100 px-3 py-3 rounded-2xl">
                <div className="flex items-center bg-green-500 py-1 px-4 rounded">
                  <div className="text-white">
                    <GiAirplaneDeparture />
                  </div>
                  <button className="text-white ml-2">Flight</button>
                </div>

                <div className="flex items-center bg-green-50 py-1 px-4 rounded ml-5">
                  <div className="text-gray-600">
                    <RiHotelLine />
                  </div>
                  <button className="text-gray-600 ml-2">Hotel</button>
                </div>

                <div className="flex items-center bg-green-50 py-1 px-4 rounded ml-5">
                  <div className="text-gray-600">
                    <GiPapers />
                  </div>
                  <button className="text-gray-600 ml-2">Visa</button>
                </div>

                <div className="flex items-center bg-green-50 py-1 px-4 rounded ml-5">
                  <div className="text-gray-600">
                    <IoBusOutline />
                  </div>
                  <button className="text-gray-600 ml-2">Buses</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
