import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerData) => {
    return await axios
      .post("http://localhost:5000/api/auth/register", registerData)
      .then((res) => res.data);
  }
);

const usertSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isAuthenticated: false,
    status: null,
    errorMessage: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logoutSuccess: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.status = null;
      localStorage.removeItem("ecommerce-app");
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.currentUser = action.payload.data;
      state.isAuthenticated = true;

      localStorage.setItem("ecommerce-app", action.payload.accessToken);
    },
    [registerUser.rejected]: (state) => {
      state.status = "error";
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
