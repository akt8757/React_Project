import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/authSlice";
import profileReducer from "../../features/profileSlice";
import globalReducer from "../../features/globallLoadingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    global: globalReducer,
  },
});
