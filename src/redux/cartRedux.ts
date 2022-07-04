import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../services/cart";

interface CartSliceState {
  products: any[];
  quantity: number;
  totalPrice: number;
}

const initialState: CartSliceState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.addProductToCart.matchFulfilled,
      (state, action) => {
        state.products = action.payload.cart.products;

        // Tính tổng số lượng sp
        const totalQuantity = state.products.reduce((total, item) => {
          return total + item.quantity;
        }, 0);
        state.quantity = totalQuantity;

        // Tính tổng giá tiền giỏ hàng
        const totalPrice = state.products.reduce((total, item) => {
          return total + item.quantity * item.product.price;
        }, 0);
        state.totalPrice = totalPrice;
      }
    );

    builder.addMatcher(
      cartApi.endpoints.removeProductFromCart.matchFulfilled,
      (state, action) => {
        state.products = action.payload.cart.products;

        // Tính tổng số lượng sp
        const totalQuantity = state.products.reduce((total, item) => {
          return total + item.quantity;
        }, 0);
        state.quantity = totalQuantity;

        // Tính tổng giá tiền giỏ hàng
        const totalPrice = state.products.reduce((total, item) => {
          return total + item.quantity * item.product.price;
        }, 0);
        state.totalPrice = totalPrice;
      }
    );

    builder.addMatcher(
      cartApi.endpoints.updateProductInCart.matchFulfilled,
      (state, action) => {
        state.products = action.payload.cart.products;

        // Tính tổng số lượng sp
        const totalQuantity = state.products.reduce((total, item) => {
          return total + item.quantity;
        }, 0);
        state.quantity = totalQuantity;

        // Tính tổng giá tiền giỏ hàng
        const totalPrice = state.products.reduce((total, item) => {
          return total + item.quantity * item.product.price;
        }, 0);
        state.totalPrice = totalPrice;
      }
    );

    builder.addMatcher(
      cartApi.endpoints.getCart.matchFulfilled,
      (state, action) => {
        state.products = action.payload.cart.products;

        // Tính tổng số lượng sp
        const totalQuantity = state.products.reduce((total, item) => {
          return total + item.quantity;
        }, 0);
        state.quantity = totalQuantity;

        // Tính tổng giá tiền giỏ hàng
        const totalPrice = state.products.reduce((total, item) => {
          return total + item.quantity * item.product.price;
        }, 0);
        state.totalPrice = totalPrice;
      }
    );
  },
});

export default cartSlice.reducer;
