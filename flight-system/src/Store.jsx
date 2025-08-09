import React, { useState } from "react";
import { MulticityContext } from "@/Provider/provider";
import { TripContext } from "./Provider/provider";
import { FlightContext } from "./Provider/provider";

export default function Store({ children }) {
  const [addCity, setAddCity] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState("on-way");

  // depaerture and arivel state
  const [airport, setAirport] = useState([
    {
      airport_code: "SPD",
      airport_name: "Saidpur",
      city_name: "Saidpur",
      country_name: "Bangladesh",
    },
    {
      airport_code: "DAC",
      airport_name: "Hazrat Shahjalal International Airport",
      city_name: "Dhaka",
      country_name: "Bangladesh",
    },
  ]);

  // passenger State
  const [pasenger, setpasenger] = useState({
    adult: 1,
    child: 0,
    kid: 0,
    infant: 0,
  });

  const [changePopup, setChangePopup] = useState(false);

  return (
    <div>
      <FlightContext.Provider
        value={{
          airport,
          setAirport,
          pasenger,
          setpasenger,
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
