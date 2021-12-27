import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "signup",
  initialState: {
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    type: "",
  },
  reducers: {
    changeEmailText: (state, action) => {
      state.email = action.payload;
    },
    changePasswordText: (state, action) => {
      state.password = action.payload;
    },
    changeNameText: (state, action) => {
      state.name = action.payload;
    },
    changePhoneText: (state, action) => {
      state.phone = action.payload;
    },
    changeAddressText: (state, action) => {
      state.address = action.payload;
    },
    changeTypeText: (state, action) => {
      state.type = action.payload;
    },
    resetSignupState: (state, action) => {
      state.email = action.payload;
      state.password = action.payload;
      state.name = action.payload;
      state.phone = action.payload;
      state.address = action.payload;
      state.type = action.payload;
    },
  },
});

export const {
  changeEmailText,
  changePasswordText,
  changeNameText,
  changePhoneText,
  changeAddressText,
  changeTypeText,
  resetSignupState,
} = slice.actions;

export const signupState = (state) => ({
  email: state.signup.email,
  password: state.signup.password,
  name: state.signup.name,
  phone: state.signup.phone,
  address: state.signup.address,
  type: state.signup.type,
});

export default slice.reducer;
