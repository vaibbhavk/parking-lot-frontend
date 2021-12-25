import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import signupReducer from "./slices/signupSlice";
import tokenReducer from "./slices/tokenSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    token: tokenReducer,
  },
});
