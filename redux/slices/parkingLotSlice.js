import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "parkingLot",
  initialState: {
    name: "",

    addressId: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  },
  reducers: {
    changeNameText: (state, action) => {
      state.name = action.payload;
    },
    changeStreetText: (state, action) => {
      state.street = action.payload;
    },
    changeCityText: (state, action) => {
      state.city = action.payload;
    },
    changeStateText: (state, action) => {
      state.state = action.payload;
    },
    changeZipcodeText: (state, action) => {
      state.zipcode = action.payload;
    },
    changeCountryText: (state, action) => {
      state.country = action.payload;
    },
    changeAddressId: (state, action) => {
      state.addressId = action.payload;
    },

    resetParkingLotState: (state, action) => {
      state.name = action.payload;
      state.street = action.payload;
      state.city = action.payload;
      state.state = action.payload;
      state.zipcode = action.payload;
      state.country = action.payload;
      state.addressId = action.payload;
    },
  },
});

export const {
  changeNameText,
  changeStreetText,
  changeCityText,
  changeStateText,
  changeZipcodeText,
  changeCountryText,
  changeAddressId,
  resetParkingLotState,
} = slice.actions;

export const parkingLotState = (state) => ({
  name: state.parkingLot.name,
  city: state.parkingLot.city,
  street: state.parkingLot.street,
  state: state.parkingLot.state,
  zipcode: state.parkingLot.zipcode,
  country: state.parkingLot.country,
  addressId: state.parkingLot.addressId,
});

export default slice.reducer;
