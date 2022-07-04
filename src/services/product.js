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
      query: ({ category, page, size, sort }) =>
        `products?category=${category}&page=${page}&size=${size}&sort=${sort}`,
      transformResponse: (response, meta, arg) => response.data,
    }),

    getProduct: builder.query({
      query: (productId) => `products/find/${productId}`,

      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
