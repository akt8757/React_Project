import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { TripContext } from "../../Provider/provider";

export default function FlySearch() {
  const selector = useSelector((state) => state.flightSearch);
  const { selectedTrip } = useContext(TripContext);

  // const data = selector.trips.map((item) => {
  //   return item;
  // });
  // console.log("data", data);
  const onWayTrip = selector.trips[0];
  const roundTripOne = selector.trips[0];
  const roundTripTwo = selector.trips[1];

  const handleSearch = () => {
    let redyForSearch;
    if (selectedTrip === "on-way") {
      redyForSearch = {
        agency_id: "43",
        trip_type: selector.trip_type,
        fare_type: "NORMAL",
        cabin_class: selector.cabin_class,
        trips: [
          {
            departure_date: onWayTrip.departure_date,
            departure_airport: onWayTrip.departure_airport,
            arrival_airport: onWayTrip.arrival_airport,
          },
        ],
        passengers: {
          adult: selector.passengers.adult,
          child: selector.passengers.child,
          kid: selector.passengers.kid,
          infant: selector.passengers.infant,
        },
      };
    } else if (selectedTrip === "multi-city") {
      redyForSearch = {
        agency_id: "43",
        trip_type: selector.trip_type,
        fare_type: "NORMAL",
        cabin_class: selector.cabin_class,
        trips: selector.trips.map((trip) => {
          return {
            departure_date: trip.departure_date,
            departure_airport: trip.departure_airport,
            arrival_airport: trip.arrival_airport,
          };
        }),
        passengers: {
          adult: selector.passengers.adult,
          child: selector.passengers.child,
          kid: selector.passengers.kid,
          infant: selector.passengers.infant,
        },
      };
    } else if (selectedTrip === "round-trip") {
      redyForSearch = {
        agency_id: "43",
        trip_type: selector.trip_type,
        fare_type: "NORMAL",
        cabin_class: selector.cabin_class,
        trips: [
          {
            departure_date: roundTripOne.departure_date,
            departure_airport: roundTripOne.departure_airport,
            arrival_airport: roundTripOne.arrival_airport,
          },
          {
            departure_date: roundTripTwo.departure_date,
            departure_airport: roundTripTwo.departure_airport,
            arrival_airport: roundTripTwo.arrival_airport,
          },
        ],
        passengers: {
          adult: selector.passengers.adult,
          child: selector.passengers.child,
          kid: selector.passengers.kid,
          infant: selector.passengers.infant,
        },
      };
    }
    console.log("lisiting from search", redyForSearch);
  };

  return (
    <div className="flex justify-center items-center mt-5 mb-10">
      <button
        onClick={handleSearch}
        className="bg-green-400 px-10 py-3 text-white font-medium  rounded-2xl"
      >
        Search
      </button>
    </div>
  );
}
