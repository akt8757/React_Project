import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trip_type: "ROUND_TRIP",
  fare_type: "NORMAL",
  cabin_class: "ECONOMY",
  trips: [
    {
      departure_date: "",
      departure_airport: "DAC",
      arrival_airport: "CXB",
      departure_airport_name: "Hazrat Shahjalal International Airport",
      departure_city_name: "Dhaka",
      departure_country_name: "Bangladesh",
      arrival_airport_name: "Cox's Bazar",
      arrival_city_name: "Cox's Bazar",
      arrival_country_name: "Bangladesh",
    },
    {
      departure_date: "",
      departure_airport: "CXB",
      arrival_airport: "DAC",
      departure_airport_name: "Cox's Bazar",
      departure_city_name: "Cox's Bazar",
      departure_country_name: "Bangladesh",
      arrival_airport_name: "Hazrat Shahjalal International Airport",
      arrival_city_name: "Dhaka",
      arrival_country_name: "Bangladesh",
    },
  ],
  passengers: {
    adult: 1,
    child: 0,
    kid: 0,
    infant: 0,
  },
};

const flightSearchSlice = createSlice({
  name: "flightSearch",
  initialState: initialState,

  reducers: {
    setPassenger: (state, action) => {
      const pax = state.passengers;

      const { type, delta } = action.payload;
      let newCount = Math.max(0, pax[type] + delta);
      if (type === "adult" && newCount === 0) {
        newCount = 1;
      }
      pax[type] = newCount;
    },

    setTravelClass: (state, action) => {
      state.cabin_class = action.payload;
    },

    setAddCity: (state, action) => {
      if (action.payload === "add") {
        state.trips = [
          ...state.trips,
          {
            departure_date: "",
            departure_airport: "CXB",
            arrival_airport: "DAC",
            departure_airport_name: "Cox's Bazar",
            departure_city_name: "Cox's Bazar",
            departure_country_name: "Bangladesh",
            arrival_airport_name: "Hazrat Shahjalal International Airport",
            arrival_city_name: "Dhaka",
            arrival_country_name: "Bangladesh",
          },
        ];
      }
    },

    setRemoveCity: (state, action) => {
      const updatedValue = state.trips.filter(
        (_, index) => index !== action.payload
      );
      console.log("listening", state.trips);

      state.trips = updatedValue;
    },

    setAirPortData: (state, action) => {
      const {
        index,
        item,
        arrival,
        departure,
        selectedTrip,
        getdateOne,
        getDateTwo,
        getDate,
      } = action.payload;

      if (selectedTrip === "on-way") {
        state.trip_type = "on-way";
      } else if (selectedTrip === "round-trip") {
        state.trip_type = "ROUND_TRIP";
      } else if (selectedTrip === "multi-city") {
        state.trip_type = "MULTI-CITY";
      }

      if (getDate) {
        state.trips[index].departure_date = getDate;
      } else if (getDateTwo && getdateOne) {
        state.trips[0].departure_date = getdateOne;
        state.trips[1].departure_date = getDateTwo;
      }

      //   let match =
      //     state.trips[index].arrival_airport === item.airport_code ||
      //     state.trips[index].departure_airport === item.airport_code;
      //   if (item.airport_code === match) {
      //     console.log("match");
      //   }

      // const found = state.trips.forEach(
      //   (trip) => trip.departure_date === trip.departure_airport
      // );

      // console.log(found);
      // if (found) {
      //   console.log(found);
      // }

      //   round trip logic
      if (selectedTrip === "round-trip") {
        if (arrival === "arrival") {
          state.trips[0].arrival_airport = item.airport_code;
          state.trips[0].arrival_airport_name = item.airport_name;
          state.trips[0].arrival_city_name = item.city_name;
          state.trips[0].arrival_country_name = item.country_name;
          state.trips[1].departure_airport = item.airport_code;
          state.trips[1].departure_airport_name = item.airport_name;
          state.trips[1].departure_city_name = item.city_name;
          state.trips[1].departure_country_name = item.country_name;
        } else if (departure === "departure") {
          state.trips[0].departure_airport = item.airport_code;
          state.trips[0].departure_airport_name = item.airport_name;
          state.trips[0].departure_city_name = item.city_name;
          state.trips[0].departure_country_name = item.country_name;
          state.trips[1].arrival_airport = item.airport_code;
          state.trips[1].arrival_airport_name = item.airport_name;
          state.trips[1].arrival_city_name = item.city_name;
          state.trips[1].arrival_country_name = item.country_name;
        }
      }

      //   one way & multi city trip consider a single flight object in one arry
      if (arrival === "arrival") {
        state.trips[index].arrival_airport = item.airport_code;
        state.trips[index].arrival_airport_name = item.airport_name;
        state.trips[index].arrival_city_name = item.city_name;
        state.trips[index].arrival_country_name = item.country_name;
      } else if (departure === "departure") {
        state.trips[index].departure_airport = item.airport_code;
        state.trips[index].departure_airport_name = item.airport_name;
        state.trips[index].departure_city_name = item.city_name;
        state.trips[index].departure_country_name = item.country_name;
      }
      console.log("index", departure);
    },
  },
});
export const {
  setPassenger,
  setTravelClass,
  setAddCity,
  setRemoveCity,
  setAirPortData,
} = flightSearchSlice.actions;
export default flightSearchSlice.reducer;

// const newCount = Math.max(0, prev[type] + delta);
// if (type === "adult" && newCount === 0) return prev;
// return { ...prev, [type]: newCount };
