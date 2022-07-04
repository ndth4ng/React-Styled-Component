import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusType } from "../shared/types/status.type";

interface WishlistSliceState {
  products: any[];
  status: StatusType;
}

const initialState: WishlistSliceState = {
  products: [],
  status: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // FETCH WISHLIST DATA
    fetchWishlistStart: (state) => {
      state.status = "pending";
    },
    fetchWishlistSuccess: (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    },
    fetchWishlistFailure: (state) => {
      state.status = "failed";
    },
    // ADD
    addWishlistStart: (state) => {
      state.status = "pending";
    },
    addWishlistSuccess: (state, action: PayloadAction<any>) => {
      state.status = "succeeded";
      state.products.push(action.payload);
    },
    addWishlistFailure: (state) => {
      state.status = "failed";
    },

    // DELETE
    deleteWishlistStart: (state) => {
      state.status = "pending";
    },
    deleteWishlistSuccess: (state, action) => {
      state.status = "succeeded";
      state.products.splice(
        state.products.findIndex((item: any) => item._id === action.payload),
        1
      );
    },
    deleteWishlistFailure: (state) => {
      state.status = "failed";
    },
  },
});

export const {
  addWishlistStart,
  addWishlistSuccess,
  addWishlistFailure,
  deleteWishlistStart,
  deleteWishlistSuccess,
  deleteWishlistFailure,
  fetchWishlistStart,
  fetchWishlistSuccess,
  fetchWishlistFailure,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
