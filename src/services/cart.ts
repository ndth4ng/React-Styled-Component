import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const cartApi = createApi({
  // Tương tự tên Slice khi tạo Slice thông thường
  reducerPath: "cartApi",

  // Cấu hình chung cho tất cả request
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/cart",

    // Xử lý header trước khi gửi request
    prepareHeaders: (headers) => {
      const token = Cookies.get("ecommerce");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  // Các endpoints (lệnh gọi request)
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (userId) => `/find/${userId}`,
    }),

    addProductToCart: builder.mutation({
      query: (product) => ({
        url: `/`,
        method: "POST",
        body: product,
      }),
    }),

    removeProductFromCart: builder.mutation({
      query: (product) => ({
        url: `/cart-item`,
        method: "DELETE",
        body: product,
      }),
    }),

    updateProductInCart: builder.mutation({
      query: (productInfo) => ({
        url: `/cart-item`, // increase & decrease
        method: "PUT",
        body: productInfo,
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddProductToCartMutation,
  useRemoveProductFromCartMutation,
  useUpdateProductInCartMutation,
} = cartApi;
