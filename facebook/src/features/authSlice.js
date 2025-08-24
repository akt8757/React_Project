import { createSlice } from "@reduxjs/toolkit";

const authInfo = {
  user: true,
  tokens: { token: "", refreshToken: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInfo,

  reducers: {
    setToken: (state, action) => {
      state.tokens.token = action.payload.token;
      state.tokens.refreshToken = action.payload.refreshToken;
      // console.log("token", token);
    },

    setUser: (state, action) => {
      state.user = action.payload;
      // console.log(action.payload);
    },

    setNewToken: (state, action) => {
      state.tokens.token = action.payload;
      // console.log("listining from redux slice", action.payload);
    },
    setLogout: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser, setNewToken, setLogout } = authSlice.actions;
export default authSlice.reducer;
