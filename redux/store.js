import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import signupReducer from "./slices/signupSlice";
import loginDetailReducer from "./slices/loginDetailSlice";
import parkingLotReducer from "./slices/parkingLotSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    loginDetail: loginDetailReducer,
    parkingLot: parkingLotReducer,
  },
});
