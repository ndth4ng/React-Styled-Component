import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import wishlistReducer from "./wishlistRedux";
import productReducer from "./productRedux";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  wishlist: wishlistReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
