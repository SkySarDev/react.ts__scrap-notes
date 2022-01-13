import { SerializedError } from "@reduxjs/toolkit";
import { ICustomQueryErrors } from "types/apiTypes";

export interface INoteCategory {
  _id: string;
  name: string;
}

export type AddNewCategoryDataType = Omit<INoteCategory, "_id">;

export interface INoteItem {
  _id: string;
  categoryId: string;
  title: string;
  body: string;
}
export interface ICategoryListData {
  data?: INoteCategory[];
  error?: ICustomQueryErrors | SerializedError;
  isLoading: boolean;
}

export interface IAddCategoryUtils {
  data?: INoteCategory;
  error?: ICustomQueryErrors | SerializedError;
  isLoading: boolean;
}
