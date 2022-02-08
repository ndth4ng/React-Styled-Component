import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../services/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
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
        state.total = totalPrice;
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
        state.total = totalPrice;
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
        state.total = totalPrice;
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
        state.total = totalPrice;
      }
    );
  },
});

export const {
  loadProduct,
  addProduct,
  quantity,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
