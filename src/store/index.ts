import { configureStore } from "@reduxjs/toolkit";

import { noteCategoriesApi } from "services/noteCategoriesApi";
import { usersApi } from "services/usersApi";

export const store = configureStore({
  reducer: {
    [noteCategoriesApi.reducerPath]: noteCategoriesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      noteCategoriesApi.middleware,
      usersApi.middleware
    ),
});
