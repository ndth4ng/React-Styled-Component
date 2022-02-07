import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../services/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    loadProduct: (state, action) => {
      // Get cart products
      const list = action.payload.list.map((product) => {
        return {
          ...product.productId,
          color: product.color,
          quantity: product.quantity,
        };
      });
      state.products = list;

      // Count quantity
      let quantity = state.products.reduce((total, item) => {
        return total + item.quantity;
      }, 0);

      state.quantity = quantity;

      // Count total price
      let totalPrice = null;
      state.products.map((product) => {
        return (totalPrice += product.quantity * product.price);
      });

      state.total = totalPrice;
    },

    deleteProduct: (state, action) => {
      const existItemIndex = state.products.findIndex(
        (item) =>
          item._id === action.payload.productId &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      // Calculate quantity
      state.quantity -= state.products[existItemIndex].quantity;
      // Calculate total price
      state.total -=
        state.products[existItemIndex].quantity *
        state.products[existItemIndex].price;
      // Delete product
      state.products.splice(existItemIndex, 1);
    },
    increaseQuantity: (state, action) => {
      const existItemIndex = state.products.findIndex(
        (item) =>
          item._id === action.payload.productId &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      // Calculate total quantity
      state.quantity++;
      // Calculate product quantity
      state.products[existItemIndex].quantity++;
      // Calculate total price
      state.total += state.products[existItemIndex].price;
    },
    decreaseQuantity: (state, action) => {
      const existItemIndex = state.products.findIndex(
        (item) =>
          item._id === action.payload.productId &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (state.products[existItemIndex].quantity > 1) {
        // Calculate total quantity
        state.quantity--;
        // Calculate product quantity
        state.products[existItemIndex].quantity--;
        // Calculate total price
        state.total -= state.products[existItemIndex].price;
      }
    },
  },
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
