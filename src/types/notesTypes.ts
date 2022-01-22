import { IAddCategoryData, IAddNoteData } from "types/modalsTypes";

export interface INoteCategory {
  _id: string;
  title: string;
}

export interface INoteItem {
  _id: string;
  categoryId: string;
  title: string;
  body: string;
  dateCreate: number;
}

type NotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export type AddCategoryDataType = NotNull<IAddCategoryData>;
export type AddNoteDataType = NotNull<IAddNoteData>;
export type AddNoteToDBDataType = Omit<INoteItem, "_id" | "dateCreate">;

interface IDefaultResponseData {
  isError: boolean;
  isLoading: boolean;
}

export interface ICategoryListData extends IDefaultResponseData {
  data?: INoteCategory[];
}

export interface IAddCategoryUtils extends IDefaultResponseData {
  data?: INoteCategory;
  isSuccess: boolean;
}

export interface INoteListData extends IDefaultResponseData {
  data?: INoteItem[];
}

export interface INoteResponseStatuses extends IDefaultResponseData {
  isSuccess: boolean;
}
