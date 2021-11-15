import { createSlice } from "@reduxjs/toolkit";

const usertSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isAuthenticated: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.isFetching = false;
      state.error = false;
      localStorage.removeItem("persist:root");
    },
    setTokenSuccess: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  setTokenSuccess,
} = usertSlice.actions;

export default usertSlice.reducer;
