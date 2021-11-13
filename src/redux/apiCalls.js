import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  addWishlistStart,
  addWishlistSuccess,
  addWishlistFailure,
  deleteWishlistStart,
  deleteWishlistSuccess,
  deleteWishlistFailure,
} from "./wishlistRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const addProductToWishList = async (dispatch, product) => {
  dispatch(addWishlistStart());
  try {
    // const res = await userRequest.put("/wishlist/", product._id);
    dispatch(addWishlistSuccess(product));
  } catch (error) {
    dispatch(addWishlistFailure());
  }
};

export const deleteProductFromWishList = async (dispatch, productId) => {
  dispatch(deleteWishlistStart());
  try {
    // const res = await userRequest.put("/wishlist/", product._id);
    dispatch(deleteWishlistSuccess(productId));
  } catch (error) {
    dispatch(deleteWishlistFailure());
  }
};
