import React, { FC, ReactElement } from "react";
import { Alert, Box, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { ICategoryListData } from "types/notesTypes";

import NoteCategoryList from "components/NoteCategories/NoteCategoryList";
import LoadingSpinner from "components/UI/LoadingSpinner";

interface IProps {
  categoryListData: ICategoryListData;
  openModalAddCategory: () => void;
}

const NoteCategoriesBlock: FC<IProps> = ({
  categoryListData,
  openModalAddCategory,
}): ReactElement => {
  const { data, isError, isLoading } = categoryListData;

  return (
    <>
      <Paper elevation={3} sx={{ p: 1, mt: 1 }}>
        {isError && (
          <Alert severity="error">Ошибка получения списка категорий</Alert>
        )}

        {isLoading && <LoadingSpinner />}

        {data && <NoteCategoryList categoryList={data} />}
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 1.5 }}>
        <Button startIcon={<AddIcon />} onClick={openModalAddCategory}>
          Добавить категорию
        </Button>
      </Box>
    </>
  );
};

export default NoteCategoriesBlock;
