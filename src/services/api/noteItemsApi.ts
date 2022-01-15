import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "services/api/baseQuery";

import { ApiUrls } from "constants/ApiUrls";
import { AddNewNoteDataType, INoteItem } from "types/notesTypes";

export const noteItemsApi = createApi({
  reducerPath: "note-items",
  tagTypes: ["NoteItems"],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getAllNotes: builder.query<INoteItem[], void>({
      query: () => ({ url: ApiUrls.NOTE_ITEMS }),
      providesTags: () => ["NoteItems"],
    }),
    addNote: builder.mutation<INoteItem, AddNewNoteDataType>({
      query: (body) => ({ url: ApiUrls.NOTE_ITEMS, method: "POST", body }),
      invalidatesTags: () => ["NoteItems"],
    }),
    deleteNote: builder.mutation<unknown, string>({
      query: (id) => ({ url: `${ApiUrls.NOTE_ITEMS}/${id}`, method: "DELETE" }),
      invalidatesTags: () => ["NoteItems"],
    }),
  }),
});

export const { useDeleteNoteMutation } = noteItemsApi;
