import React, { useState } from "react";
import { MulticityContext } from "@/Provider/provider";
import { TripContext } from "./Provider/provider";
import { FlightContext } from "./Provider/provider";

export default function Store({ children }) {
  const [addCity, setAddCity] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState("on-way");

  const [changePopup, setChangePopup] = useState(false);

  return (
    <div>
      <FlightContext.Provider
        value={{
          changePopup,
          setChangePopup,
        }}
      >
        <TripContext.Provider value={{ selectedTrip, setSelectedTrip }}>
          <MulticityContext.Provider value={{ addCity, setAddCity }}>
            {children}
          </MulticityContext.Provider>
        </TripContext.Provider>
      </FlightContext.Provider>
    </div>
  );
}
