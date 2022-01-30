import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import wishlistReducer from "./wishlistRedux";
import productReducer from "./productRedux";

import { productsApi } from "../services/products";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   product: productReducer,
//   wishlist: wishlistReducer,
// });

export const store = configureStore({
  reducer: {
    // Tạo thêm slice từ api
    [productsApi.reducerPath]: productsApi.reducer,

    // Slice thông thường
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    wishlist: wishlistReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
