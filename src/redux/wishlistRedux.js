import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // FETCH WISHLIST DATA
    fetchWishlistStart: (state) => {
      state.isFetching = true;
    },
    fetchWishlistSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    fetchWishlistFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    // ADD
    addWishlistStart: (state) => {
      state.isFetching = true;
    },
    addWishlistSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addWishlistFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    // DELETE
    deleteWishlistStart: (state) => {
      state.isFetching = true;
    },
    deleteWishlistSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteWishlistFailure: (state) => {
      state.isFetching = true;
      state.error = true;
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
