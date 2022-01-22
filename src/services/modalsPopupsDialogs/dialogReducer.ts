import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDialogState {
  category: {
    _id: string | null;
  };
  note: {
    _id: string | null;
  };
}

const initialState: IDialogState = {
  category: {
    _id: null,
  },
  note: {
    _id: null,
  },
};

export const dialogReducer = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showCategoryDialog: (state, action: PayloadAction<string>) => {
      state.category._id = action.payload;
    },
    showNoteDialog: (state, action: PayloadAction<string>) => {
      state.note._id = action.payload;
    },
    hideDeleteDialog: (state, action: PayloadAction<"category" | "note">) => {
      const type = action.payload;
      state[type]._id = null;
    },
  },
});
