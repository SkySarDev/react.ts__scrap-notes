import { configureStore } from "@reduxjs/toolkit";

import { usersApi } from "services/api/usersApi";
import { noteCategoriesApi } from "services/api/noteCategoriesApi";
import { noteItemsApi } from "services/api/noteItemsApi";
import { dialogReducer } from "services/modalsPopupsDialogs/dialogReducer";
import { popupReducer } from "services/modalsPopupsDialogs/popupReducer";
import { modalReducer } from "services/modalsPopupsDialogs/modalReducer";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [noteCategoriesApi.reducerPath]: noteCategoriesApi.reducer,
    [noteItemsApi.reducerPath]: noteItemsApi.reducer,
    [dialogReducer.name]: dialogReducer.reducer,
    [popupReducer.name]: popupReducer.reducer,
    [modalReducer.name]: modalReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      noteCategoriesApi.middleware,
      usersApi.middleware,
      noteItemsApi.middleware
    ),
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
