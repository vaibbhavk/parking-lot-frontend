import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "loginDetail",
  initialState: {
    id: "",
    type: "",
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setToken, setId, setType } = slice.actions;

export const loginDetailState = (state) => ({
  id: state.loginDetail.id,
  type: state.loginDetail.type,
  token: state.loginDetail.token,
});

export default slice.reducer;
