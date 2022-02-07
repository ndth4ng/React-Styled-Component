import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  // Tương tự tên Slice khi tạo Slice thông thường
  reducerPath: "productApi",

  // Cấu hình chung cho tất cả request
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),

  // Các endpoints (lệnh gọi request)
  endpoints: (builder) => ({
    // GET

    getProducts: builder.query({
      query: (page, sort) => `products?category=&page=${page}&sort=${sort}`,
    }),

    getProduct: builder.query({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
