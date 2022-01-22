import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IEditCategoryData,
  IEditNoteData,
  IModalHide,
  IModalNotesState,
} from "types/modalsTypes";

const initialState: IModalNotesState = {
  category: {
    add: {
      isShow: false,
      data: null,
    },
    edit: {
      isShow: false,
      data: null,
    },
  },
  note: {
    add: {
      isShow: false,
      data: null,
    },
    edit: {
      isShow: false,
      data: null,
    },
  },
};

export const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModalAddCategory: (state) => {
      state.category.add.isShow = true;
    },
    showModalEditCategory: (
      state,
      action: PayloadAction<IEditCategoryData>
    ) => {
      const { _id, title } = action.payload;
      state.category.edit.isShow = true;
      state.category.edit.data = { _id, title };
    },
    showModalAddNote: (state) => {
      state.note.add.isShow = true;
    },
    showModalEditNote: (state, action: PayloadAction<IEditNoteData>) => {
      const { _id, title, body } = action.payload;
      state.note.edit.isShow = true;
      state.note.edit.data = { _id, title, body };
    },
    hideModal: (state, action: PayloadAction<IModalHide>) => {
      const { type, act } = action.payload;
      state[type][act].isShow = false;
      state[type][act].data = null;
    },
  },
});
