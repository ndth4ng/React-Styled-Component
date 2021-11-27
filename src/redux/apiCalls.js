import { getToken, publicRequest, userRequest } from "../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  setTokenSuccess,
} from "./userRedux";
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

import { showNotify } from "../utils/showNotify";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    setTimeout(() => {
      getToken();
      dispatch(setTokenSuccess());
    }, 1000);
  } catch (error) {
    dispatch(loginFailure());
    console.log(error);
  }
};

export const logout = (dispatch) => {
  dispatch(logoutSuccess());
};

export const fetchWishlist = async (dispatch, userId) => {
  dispatch(fetchWishlistStart());
  try {
    const res = await userRequest.get(`/wishlist/find/${userId}`);
    dispatch(fetchWishlistSuccess(res.data));
  } catch (error) {
    dispatch(fetchWishlistFailure());
    console.log(error);
  }
};

export const addProductToWishList = async (dispatch, userId, product) => {
  dispatch(addWishlistStart());
  try {
    const res = await userRequest.patch(
      `/wishlist/${userId}/product/${product._id}?action=add`
    );
    if (res.data.success) {
      showNotify(res.data.msg, "success");
      dispatch(addWishlistSuccess(product));
    } else {
      showNotify(res.data.msg, "danger");
    }
  } catch (error) {
    dispatch(addWishlistFailure());
  }
};

export const deleteProductFromWishList = async (
  dispatch,
  userId,
  productId
) => {
  dispatch(deleteWishlistStart());
  try {
    await userRequest.patch(
      `/wishlist/${userId}/product/${productId}?action=remove`
    );
    dispatch(deleteWishlistSuccess(productId));
  } catch (error) {
    dispatch(deleteWishlistFailure());
  }
};
