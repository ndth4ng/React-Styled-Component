import { getToken, publicRequest, userRequest } from "../requestMethods";
// import {
//   loginFailure,
//   loginStart,
//   loginSuccess,
//   logoutSuccess,
//   setTokenSuccess,
// } from "./userRedux";

import {
  addWishlistStart,
  addWishlistSuccess,
  addWishlistFailure,
  deleteWishlistStart,
  deleteWishlistSuccess,
  deleteWishlistFailure,
  fetchWishlistStart,
  fetchWishlistSuccess,
  fetchWishlistFailure,
} from "./wishlistRedux";

// import { addProduct, increaseQuantity, loadProduct } from "./cartRedux";

import { showNotify } from "../utils/showNotify";
import { Dispatch } from "@reduxjs/toolkit";

// export const login = async (dispatch: Dispatch, user: any) => {
//   dispatch(loginStart());
//   try {
//     const res = await publicRequest.post("/auth/login", user);
//     dispatch(loginSuccess(res.data));
//     setTimeout(() => {
//       getToken();
//       dispatch(setTokenSuccess());
//     }, 1000);
//   } catch (error) {
//     dispatch(loginFailure());
//     console.log(error);
//   }
// };

// export const logout = (dispatch: Dispatch) => {
//   dispatch(logoutSuccess());
// };

// export const fetchData = async (dispatch: Dispatch, userId: string) => {
//   try {
//     const res = await userRequest.get(`/cart/find/${userId}`);
//     dispatch(loadProduct(res.data));
//   } catch (error) {}
// };

// export const addProductToCart = async (
//   dispatch: Dispatch,
//   product: any,
//   userId: string
// ) => {
//   dispatch(addProduct(product));
//   try {
//     const newProduct = {
//       productId: product._id,
//       quantity: product.quantity,
//       size: product.size,
//       color: product.color,
//     };
//     const res = await userRequest.put(`/cart/${userId}`, newProduct);
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

type CartUpdateType = "increase" | "decrease" | "remove";

export const updateCart = async (
  dispatch: Dispatch,
  product: any,
  userId: string,
  type: CartUpdateType
) => {
  //type: increase, descrease, remove
  switch (type) {
    case "increase":
      // dispatch(increaseQuantity());
      break;
    case "decrease":
      break;
    case "remove":
      break;
  }
};

// export const fetchWishlist = async (dispatch: Dispatch, userId: string) => {
//   dispatch(fetchWishlistStart());
//   try {
// const res = await userRequest.get(`/wishlist/find/${userId}`);
//     dispatch(fetchWishlistSuccess(res.data));
//   } catch (error) {
//     dispatch(fetchWishlistFailure());
//     console.log(error);
//   }
// };

// export const addProductToWishList = async (
//   dispatch: Dispatch,
//   userId: string,
//   product: any
// ) => {
//   dispatch(addWishlistStart());
//   try {
//     const res = await userRequest.patch(
//       `/wishlist/${userId}/product/${product._id}?action=add`
//     );
//     if (res.data.success) {
//       showNotify(res.data.msg, "success");
//       dispatch(addWishlistSuccess(product));
//     } else {
//       showNotify(res.data.msg, "danger");
//     }
//   } catch (error) {
//     dispatch(addWishlistFailure());
//   }
// };

// export const deleteProductFromWishList = async (
//   dispatch: Dispatch,
//   userId: string,
//   productId: any
// ) => {
//   dispatch(deleteWishlistStart());
//   try {
//     await userRequest.patch(
//       `/wishlist/${userId}/product/${productId}?action=remove`
//     );
//     dispatch(deleteWishlistSuccess(productId));
//   } catch (error) {
//     dispatch(deleteWishlistFailure());
//   }
// };
