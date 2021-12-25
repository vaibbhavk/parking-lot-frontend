import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    changeEmailText: (state, action) => {
      state.email = action.payload;
    },
    changePasswordText: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeEmailText, changePasswordText } = slice.actions;

export const loginState = (state) => ({
  email: state.login.email,
  password: state.login.password,
});

export default slice.reducer;
