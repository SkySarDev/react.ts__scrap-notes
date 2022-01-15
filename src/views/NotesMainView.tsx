import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";

import {
  IAddCategoryUtils,
  IAddNoteUtils,
  ICategoryListData,
  IFormAddNotesValues,
  INoteListData,
} from "types/notesTypes";

import NoteCategoriesBlock from "components/NoteCategories/NoteCategoriesBlock";
import AddNoteCategoryBlock from "components/NoteCategories/AddNoteCategoryBlock";
import NoteItemsBlock from "components/NoteItems/NoteItemsBlock";
import AddNoteItemBlock from "components/NoteItems/AddNoteItemBlock";

interface IProps {
  currentCategory?: string;
  categoryListData: ICategoryListData;
  noteListData: INoteListData;
  addNewCategory: (data: IFormAddNotesValues) => void;
  addCategoryUtils: IAddCategoryUtils;
  addNewNote: (data: IFormAddNotesValues) => void;
  addNoteUtils: IAddNoteUtils;
}

const NotesMainView: FC<IProps> = ({
  currentCategory,
  categoryListData,
  noteListData,
  addNewCategory,
  addCategoryUtils,
  addNewNote,
  addNoteUtils,
}): ReactElement => {
  return (
    <Grid container sx={{ mt: 3, columnGap: 3 }}>
      <Grid item md={4}>
        <NoteCategoriesBlock categoryListData={categoryListData} />
        <AddNoteCategoryBlock
          addNewCategory={addNewCategory}
          addCategoryUtils={addCategoryUtils}
        />
      </Grid>

      <Grid item md>
        <NoteItemsBlock noteListData={noteListData} />
        {currentCategory && (
          <AddNoteItemBlock
            addNewNote={addNewNote}
            addNoteUtils={addNoteUtils}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default NotesMainView;
