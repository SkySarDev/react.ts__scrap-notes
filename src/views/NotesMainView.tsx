import React, { FC, ReactElement } from "react";
import { Grid, Typography } from "@mui/material";

import NoteCategoriesContainer from "containers/notes/NoteCategoriesContainer";
import NoteItemsContainer from "containers/notes/NoteItemsContainer";

const NotesMainView: FC = (): ReactElement => {
  return (
    <Grid container sx={{ mt: 3, columnGap: 3, justifyContent: "center" }}>
      <Grid item xs={12} sm={8} md={4}>
        <Typography variant={"subtitle1"} sx={{ textAlign: "center" }}>
          Категории
        </Typography>

        <NoteCategoriesContainer />
      </Grid>

      <Grid item xs={12} sm={8} md>
        <Typography variant={"subtitle1"} sx={{ textAlign: "center" }}>
          Заметки
        </Typography>

        <NoteItemsContainer />
      </Grid>
    </Grid>
  );
};

export default NotesMainView;
