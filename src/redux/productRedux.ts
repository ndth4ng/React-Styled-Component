import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusType } from "../shared/types/status.type";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/products/");
    return response.data;
  }
);

interface ProductSliceState {
  isFetching: boolean;
  products: any[];
  status: StatusType;
  // TODO: remove error
  error: boolean;
}

const initialState: ProductSliceState = {
  isFetching: false,
  products: [],
  status: "idle",
  // TODO: remove error
  error: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Get all products
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Delete product
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Update product
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex(
          (item) => item._id === action.payload.productId
        )
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Add product
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
  // extraReducers: {
  //   [fetchProducts.pending]: (state: ProductSliceState) => {
  //     state.status = "pending";
  //   },
  //   [fetchProducts.fulfilled]: (state: ProductSliceState, action: PayloadAction<any>) => {
  //     state.status = "succeeded";
  //     state.products = action.payload.data;
  //   },
  //   [fetchProducts.rejected]: (state: ProductSliceState, action: PayloadAction<any>) => {
  //     state.status = "failed";
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload.data;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
