import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "services/api/baseQuery";

import { ApiUrls } from "constants/ApiUrls";
import { INoteItem } from "types/notesTypes";

export const noteItemsApi = createApi({
  reducerPath: "note-items",
  tagTypes: ["NoteItems"],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getNotesByCategory: builder.query<INoteItem[], string>({
      query: (categoryId) => ({ url: `${ApiUrls.NOTE_ITEMS}/${categoryId}` }),
      providesTags: () => ["NoteItems"],
    }),
    addNote: builder.mutation<INoteItem, Omit<INoteItem, "_id">>({
      query: (body) => ({ url: ApiUrls.NOTE_ITEMS, method: "POST", body }),
      invalidatesTags: () => ["NoteItems"],
    }),
    deleteNote: builder.mutation<unknown, string>({
      query: (id) => ({ url: `${ApiUrls.NOTE_ITEMS}/${id}`, method: "DELETE" }),
      invalidatesTags: () => ["NoteItems"],
    }),
  }),
});

export const {
  useGetNotesByCategoryQuery,
  useAddNoteMutation,
  useDeleteNoteMutation,
} = noteItemsApi;
