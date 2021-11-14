import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
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

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const fetchWishlist = async (dispatch, userId) => {
  dispatch(fetchWishlistStart());
  try {
    const res = await userRequest.get(`/wishlist/find/${userId}`);
    dispatch(fetchWishlistSuccess(res.data));
  } catch (error) {
    dispatch(fetchWishlistFailure());
  }
};

export const addProductToWishList = async (dispatch, userId, product) => {
  dispatch(addWishlistStart());
  try {
    const res = await userRequest.patch(
      `/wishlist/${userId}/product/${product._id}?action=add`
    );
    dispatch(addWishlistSuccess(product));
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
    const res = await userRequest.patch(
      `/wishlist/${userId}/product/${productId}?action=remove`
    );
    dispatch(deleteWishlistSuccess(productId));
  } catch (error) {
    dispatch(deleteWishlistFailure());
  }
};
