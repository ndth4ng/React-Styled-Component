import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { usersApi } from "../services/user";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerData) => {
    return await axios
      .post("http://localhost:5000/api/auth/register", registerData)
      .then((res) => res.data)
      .catch((err) => err.data);
  }
);

interface UserState {
  currentUser: any;
  isAuthenticated: boolean;
  status: any;
}

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  status: null,
};

const usertSlice = createSlice({
  name: "user",
  initialState,
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

        toast.success("Welcome!", {
          position: "bottom-center",
        });

        Cookies.set("ecommerce", action.payload.accessToken, { expires: 7 });
      }
    );

    // builder.addMatcher(registerUser.rejected, (state, action) => {
    //   console.log(action.payload);
    // });

    // builder.addMatcher(registerUser.fulfilled, (state, action) => {
    //   // Lưu thông tin user vào state
    //   state.currentUser = action.payload.data;
    //   state.isAuthenticated = true;

    //   Cookies.set("ecommerce", action.payload.accessToken, { expires: 7 });
    // });

    // builder.addMatcher(registerUser.rejected, (state, action) => {
    //   console.log(action.payload);
    //   // toast.error(action.payload.data.msg, {
    //   //   position: "bottom-center",
    //   //   autoClose: 5000,
    //   //   hideProgressBar: false,
    //   //   closeOnClick: true,
    //   //   pauseOnHover: true,
    //   //   draggable: true,
    //   //   progress: undefined,
    //   // });
    // });

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
