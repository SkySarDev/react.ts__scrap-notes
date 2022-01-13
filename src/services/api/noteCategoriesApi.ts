import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "services/api/baseQuery";

import { ApiUrls } from "constants/ApiUrls";
import { AddNewCategoryDataType, INoteCategory } from "types/notesTypes";

export const noteCategoriesApi = createApi({
  reducerPath: "note-categories",
  tagTypes: ["NoteCategories"],
  baseQuery: baseQueryWithReAuth,
  endpoints: (build) => ({
    getAllCategories: build.query<INoteCategory[], void>({
      query: () => ({
        url: ApiUrls.NOTE_CATEGORIES,
      }),
      providesTags: () => ["NoteCategories"],
    }),
    addCategory: build.mutation<INoteCategory, AddNewCategoryDataType>({
      query: (body) => ({
        url: ApiUrls.NOTE_CATEGORIES,
        method: "POST",
        body,
      }),
      invalidatesTags: ["NoteCategories"],
    }),
    updateCategory: build.mutation<INoteCategory, INoteCategory>({
      query(data) {
        const { _id, ...body } = data;

        return {
          url: `${ApiUrls.NOTE_CATEGORIES}/${_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["NoteCategories"],
    }),
    deleteCategory: build.mutation<INoteCategory, string>({
      query: (id) => ({
        url: `${ApiUrls.NOTE_CATEGORIES}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["NoteCategories"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = noteCategoriesApi;
