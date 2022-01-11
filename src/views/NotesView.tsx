import React, { FC, ReactElement } from "react";
import { Grid, Typography } from "@mui/material";

import { useCurrentCategory } from "hooks/useCurrentCategory";

import NoteCategoryListContainer from "containers/Notes/NoteCategoryListContainer";
import NoteListContainer from "containers/Notes/NoteListContainer";

const NotesView: FC = (): ReactElement => {
  const currentCategory = useCurrentCategory();

  return (
    <Grid container sx={{ mt: 3 }}>
      <Grid item md={4}>
        <Typography variant={"subtitle1"} sx={{ pl: 2 }}>
          Категории
        </Typography>
        <NoteCategoryListContainer />
      </Grid>

      <Grid item md marginLeft={4}>
        <Typography variant={"subtitle1"}>Заметки</Typography>
        {currentCategory ? (
          <NoteListContainer category={currentCategory} />
        ) : (
          <div>Выберите категорию</div>
        )}
      </Grid>
    </Grid>
  );
};

export default NotesView;
