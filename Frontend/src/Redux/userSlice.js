import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "", // initially empty
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.fullName = "";
      state.email = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
