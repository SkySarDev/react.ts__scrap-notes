import { configureStore } from "@reduxjs/toolkit";

import { noteCategoriesApi } from "services/api/noteCategoriesApi";
import { usersApi } from "services/api/usersApi";
import { noteItemsApi } from "services/api/noteItemsApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [noteCategoriesApi.reducerPath]: noteCategoriesApi.reducer,
    [noteItemsApi.reducerPath]: noteItemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      noteCategoriesApi.middleware,
      usersApi.middleware,
      noteItemsApi.middleware
    ),
});
