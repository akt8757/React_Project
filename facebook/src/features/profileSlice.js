import { createSlice } from "@reduxjs/toolkit";

const profileInfo = {
  user: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profileInfo,

  reducers: {
    setProfileUser: (state, action) => {
      state.user = action.payload;
    },

    setAvatar: (state, action) => {
      state.user.avatar = action.payload;
    },
  },
});
export const { setProfileUser, setAvatar } = profileSlice.actions;
export default profileSlice.reducer;
