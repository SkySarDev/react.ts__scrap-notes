import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "services/api/baseQuery";

import { ApiUrls } from "constants/ApiUrls";
import {
  IUserInfo,
  IUserToken,
  UserLoginInfo,
  UserAuthInfo,
} from "types/usersTypes";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    registration: builder.mutation<IUserToken, IUserInfo>({
      query: (body) => ({ url: ApiUrls.REGISTRATION, method: "POST", body }),
    }),
    login: builder.mutation<IUserToken, UserLoginInfo>({
      query: (body) => ({
        url: ApiUrls.LOGIN,
        method: "POST",
        body,
      }),
    }),
    logout: builder.query<void, void>({
      query: () => ({ url: ApiUrls.LOGOUT }),
    }),
    auth: builder.query<UserAuthInfo, void>({
      query: () => ({ url: ApiUrls.AUTH }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useLazyLogoutQuery,
  useAuthQuery,
} = usersApi;
