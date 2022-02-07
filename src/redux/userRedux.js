import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { usersApi } from "../services/user";
import Cookies from "js-cookie";

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
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.status = null;
      Cookies.remove("ecommerce");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.login.matchFulfilled,
      (state, action) => {
        // Lưu thông tin user vào state
        state.currentUser = action.payload.data;
        state.isAuthenticated = true;

        Cookies.set("ecommerce", action.payload.accessToken, { expires: 7 });
      }
    );

    builder.addMatcher(
      usersApi.endpoints.getAuth.matchFulfilled,
      (state, action) => {
        state.currentUser = action.payload.user;
        state.isAuthenticated = true;
      }
    );
  },
});

export const { logout } = usertSlice.actions;

export default usertSlice.reducer;
