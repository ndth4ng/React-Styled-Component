import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const usersApi = createApi({
  // Tương tự tên Slice khi tạo Slice thông thường
  reducerPath: "userApi",

  // Cấu hình chung cho tất cả request
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",

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
    login: builder.mutation({
      query: (credentials) => ({
        url: `auth/login`,
        method: "POST",
        body: credentials,
      }),
    }),

    getAuth: builder.query({
      query: () => `/auth`,
    }),
  }),
});

export const { useLoginMutation, useGetAuthQuery } = usersApi;
