import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../shared/interfaces/product.interface";

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
      query: ({ category, page, size, sort }: Filter) =>
        `products?category=${category}&page=${page}&size=${size}&sort=${sort}`,

      transformResponse: (response: GetProductsResponse) => {
        return {
          products: response.data,
          info: response.info,
        };
      },
    }),

    getProduct: builder.query({
      query: (productId) => `products/find/${productId}`,

      transformResponse: (response: GetProductResponse) => response.data,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;

interface Filter {
  category?: string;
  page?: number;
  size?: string;
  sort?: string;
}

interface GetProductsResponse {
  data: Product[];
  info: {
    count: number;
    page: number;
    size: number;
    prev: any;
    next: any;
  };
}

interface GetProductResponse {
  data: Product;
  success: boolean;
}
