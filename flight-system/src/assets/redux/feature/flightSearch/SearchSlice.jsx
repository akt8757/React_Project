import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trip_type: "ROUND_TRIP",
  fare_type: "NORMAL",
  cabin_class: "ECONOMY",
  flag: false,
  selectedTrip: "on-way",
  flightDestination: "departure",
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
    setTrip: (state, action) => {
      state.selectedTrip = action.payload;
      console.log("trip", action.payload);
      if (action.payload === "round-trip") {
        state.trips[1].arrival_airport = state.trips[0].departure_airport;
        state.trips[1].arrival_airport_name =
          state.trips[0].departure_airport_name;
        state.trips[1].arrival_city_name = state.trips[0].departure_city_name;
        state.trips[1].arrival_country_name =
          state.trips[0].departure_airport_name;
        state.trips[1].departure_airport = state.trips[0].arrival_airport;
        state.trips[1].departure_airport_name =
          state.trips[0].arrival_airport_name;
        state.trips[1].departure_city_name = state.trips[0].arrival_city_name;
        state.trips[1].departure_country_name =
          state.trips[0].arrival_country_name;
      }
    },

    setFlightDestination: (state, action) => {
      state.flightDestination = action.payload;
      console.log("destination", action.payload);
    },

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
      const { index, item } = action.payload;
      console.log("city from child", item);
      if (state.selectedTrip === "on-way") {
        state.trip_type = "on-way";
      } else if (state.selectedTrip === "round-trip") {
        state.trip_type = "ROUND_TRIP";
      } else if (state.selectedTrip === "multi-city") {
        state.trip_type = "MULTI-CITY";
      }

      let getData = null;

      if (state.flightDestination === "arrival") {
        getData = state.trips[index].departure_airport === item.airport_code;
      } else if (state.flightDestination === "departure") {
        getData = state.trips[index].arrival_airport === item.airport_code;
      }

      console.log("asraful", getData);

      if (getData) {
        state.flag = getData;
      } else {
        if (state.selectedTrip === "round-trip") {
          if (state.flightDestination === "arrival") {
            state.trips[0].arrival_airport = item.airport_code;
            state.trips[0].arrival_airport_name = item.airport_name;
            state.trips[0].arrival_city_name = item.city_name;
            state.trips[0].arrival_country_name = item.country_name;
            state.trips[1].departure_airport = item.airport_code;
            state.trips[1].departure_airport_name = item.airport_name;
            state.trips[1].departure_city_name = item.city_name;
            state.trips[1].departure_country_name = item.country_name;
          } else if (state.flightDestination === "departure") {
            state.trips[0].departure_airport = item.airport_code;
            state.trips[0].departure_airport_name = item.airport_name;
            state.trips[0].departure_city_name = item.city_name;
            state.trips[0].departure_country_name = item.country_name;
            state.trips[1].arrival_airport = item.airport_code;
            state.trips[1].arrival_airport_name = item.airport_name;
            state.trips[1].arrival_city_name = item.city_name;
            state.trips[1].arrival_country_name = item.country_name;
          }
        } else {
          if (
            (state.flightDestination === "arrival" &&
              state.selectedTrip === "on-way") ||
            state.selectedTrip === "multi-city"
          ) {
            state.trips[index].arrival_airport = item.airport_code;
            state.trips[index].arrival_airport_name = item.airport_name;
            state.trips[index].arrival_city_name = item.city_name;
            state.trips[index].arrival_country_name = item.country_name;
          } else if (
            (state.flightDestination === "departure" &&
              state.selectedTrip === "on-way") ||
            state.selectedTrip === "multi-city"
          ) {
            state.trips[index].departure_airport = item.airport_code;
            state.trips[index].departure_airport_name = item.airport_name;
            state.trips[index].departure_city_name = item.city_name;
            state.trips[index].departure_country_name = item.country_name;
          }
        }
      }

      //   console.log("index", selectedTrip);
    },

    setDate: (state, action) => {
      const { getdateOne, getDateTwo, getDate, index } = action.payload;
      if (getDate) {
        state.trips[index].departure_date = getDate;
      } else if (getDateTwo && getdateOne) {
        state.trips[0].departure_date = getdateOne;
        state.trips[1].departure_date = getDateTwo;
      }
    },

    setSwapObject: (state, action) => {
      const index = action.payload;
      let temp1 = state.trips[index].departure_airport;
      let temp2 = state.trips[index].departure_airport_name;
      let temp3 = state.trips[index].departure_city_name;
      let temp4 = state.trips[index].departure_country_name;
      state.trips[index].departure_airport = state.trips[index].arrival_airport;
      state.trips[index].departure_airport_name =
        state.trips[index].arrival_airport_name;
      state.trips[index].departure_city_name =
        state.trips[index].arrival_city_name;
      state.trips[index].departure_country_name =
        state.trips[index].arrival_country_name;

      state.trips[index].arrival_airport = temp1;
      state.trips[index].arrival_airport_name = temp2;
      state.trips[index].arrival_city_name = temp3;
      state.trips[index].arrival_country_name = temp4;
    },
  },
});
export const {
  setPassenger,
  setTravelClass,
  setAddCity,
  setRemoveCity,
  setAirPortData,
  setSwapObject,
  setTrip,
  setFlightDestination,
  setDate,
} = flightSearchSlice.actions;
export default flightSearchSlice.reducer;
