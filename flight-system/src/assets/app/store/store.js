import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "../../redux/feature/flightSearch/SearchSlice";

export const store = configureStore({
  reducer: {
    flightSearch: flightSlice,
  },
});
