import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "services/api/baseQuery";

import { ApiUrls } from "constants/ApiUrls";
import { AddNoteToDBDataType, INoteItem } from "types/notesTypes";
import { IEditNoteData } from "types/modalsTypes";

export const noteItemsApi = createApi({
  reducerPath: "note-items",
  tagTypes: ["NoteItems"],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getAllNotes: builder.query<INoteItem[], void>({
      query: () => ({ url: ApiUrls.NOTE_ITEMS }),
      providesTags: () => ["NoteItems"],
    }),
    addNote: builder.mutation<INoteItem, AddNoteToDBDataType>({
      query: (body) => ({ url: ApiUrls.NOTE_ITEMS, method: "POST", body }),
      invalidatesTags: () => ["NoteItems"],
    }),
    deleteNote: builder.mutation<INoteItem, string>({
      query: (id) => ({ url: `${ApiUrls.NOTE_ITEMS}/${id}`, method: "DELETE" }),
      invalidatesTags: () => ["NoteItems"],
    }),
    updateNote: builder.mutation<INoteItem, IEditNoteData>({
      query(data) {
        const { _id, ...body } = data;

        return {
          url: `${ApiUrls.NOTE_ITEMS}/${_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["NoteItems"],
    }),
  }),
});

export const {
  useGetAllNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = noteItemsApi;
