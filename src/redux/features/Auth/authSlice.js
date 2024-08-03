import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  email: "",
  role: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginIn: (state, action) => {
      const { email, token, role } = action.payload;
      state.email = email;
      state.token = token;
      state.role = role;
    },
    logOut: (state) => {
      state.token = "";
      state.email = "";
      state.role = "";
    },
  },
});
export const { logOut, loginIn } = authSlice.actions;

export default authSlice.reducer;
