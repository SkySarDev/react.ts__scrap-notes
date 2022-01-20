export interface INoteCategory {
  _id: string;
  title: string;
}

export interface INoteItem {
  _id: string;
  categoryId: string;
  title: string;
  body: string | null;
  dateCreate: number;
}

export type AddNewCategoryDataType = Omit<INoteCategory, "_id">;
export type AddNewNoteDataType = Omit<INoteItem, "_id" | "dateCreate">;

export interface IFormAddNotesValues {
  title: string;
  body: string | null;
}

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

export interface IAddNoteUtils extends IDefaultResponseData {
  data?: INoteItem;
}

export interface IEditCategoryModalState {
  isShow: boolean;
  values?: IFormAddNotesValues;
  _id?: string;
}

export interface IDeleteCategoryModalState {
  isShow: boolean;
  _id?: string;
}
