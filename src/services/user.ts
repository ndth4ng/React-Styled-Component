import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { User } from "../shared/interfaces/user.interface";

interface CustomError {
  data: {
    success: boolean;
    msg: string;
  };
  status: number;
}

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
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,

  // Các endpoints (lệnh gọi request)
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `auth/login`,
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (credentials) => ({
        url: `auth/register`,
        method: "POST",
        body: credentials,
      }),
    }),

    getAuth: builder.query<GetAuthResponse, void>({
      query: () => `/auth`,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetAuthQuery } =
  usersApi;

interface GetAuthResponse {
  user: User;
  success: boolean;
}
