import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";

import { removeToken, saveToken } from "utils/tokensManager";

import { ApiUrls } from "constants/ApiUrls";
import { ICustomQueryError } from "types/apiTypes";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
}) as BaseQueryFn<string | FetchArgs, unknown, ICustomQueryError, unknown>;

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  ICustomQueryError,
  unknown
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refresh = await baseQuery(ApiUrls.REFRESH, api, extraOptions);
    if (refresh.data) {
      saveToken(refresh.data);
      result = await baseQuery(args, api, extraOptions);
    } else {
      removeToken();
    }
  }
  return result;
};
