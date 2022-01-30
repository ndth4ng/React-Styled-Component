import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  // Tương tự tên Slice khi tạo Slice thông thường
  reducerPath: "products",

  // Cấu hình chung cho tất cả request
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),

  // Các endpoints (lệnh gọi request)
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, sort }) => `products?category=${sort}&page=${page}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
