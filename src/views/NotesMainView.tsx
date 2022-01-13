import React, { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Alert } from "@mui/material";

import {
  AddNewCategoryDataType,
  IAddCategoryUtils,
  ICategoryListData,
} from "types/notesTypes";

import NoteListContainer from "containers/Notes/NoteListContainer";
import NoteCategoriesBlock from "components/NoteCategories/NoteCategoriesBlock";
import AddNoteCategoryBlock from "components/NoteCategories/AddNoteCategoryBlock";

interface IProps {
  categoryListData: ICategoryListData;
  addNewCategory: (data: AddNewCategoryDataType) => void;
  addCategoryUtils: IAddCategoryUtils;
}

const NotesMainView: FC<IProps> = ({
  categoryListData,
  addNewCategory,
  addCategoryUtils,
}): ReactElement => {
  const { category } = useParams();

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
        <Typography variant={"subtitle1"} sx={{ textAlign: "center" }}>
          Заметки
        </Typography>
        {category ? (
          <NoteListContainer category={category} />
        ) : (
          <Alert severity="warning">Выберите категорию</Alert>
        )}
      </Grid>
    </Grid>
  );
};

export default NotesMainView;
