import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "services/api/baseQuery";

import { ApiUrls } from "constants/ApiUrls";
import { AddCategoryDataType, INoteCategory } from "types/notesTypes";
import { IEditCategoryData } from "types/modalsTypes";

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
    addCategory: build.mutation<INoteCategory, AddCategoryDataType>({
      query: (body) => ({
        url: ApiUrls.NOTE_CATEGORIES,
        method: "POST",
        body,
      }),
      invalidatesTags: ["NoteCategories"],
    }),
    updateCategory: build.mutation<INoteCategory, IEditCategoryData>({
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
