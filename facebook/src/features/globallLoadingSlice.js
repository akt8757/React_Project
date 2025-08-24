import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialState,

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setLoading, setError } = globalSlice.actions;
export default globalSlice.reducer;
