import React, { FC, ReactElement } from "react";
import { Alert, Paper, Typography } from "@mui/material";

import { ICategoryListData } from "types/notesTypes";

import NoteCategoryList from "components/NoteCategories/NoteCategoryList";
import LoadingSpinner from "components/UI/LoadingSpinner";
import { useGetErrorMessage } from "hooks/useGetErrorMessage";

interface IProps {
  categoryListData: ICategoryListData;
}

const NoteCategoriesBlock: FC<IProps> = ({
  categoryListData,
}): ReactElement => {
  const { data, error, isLoading } = categoryListData;
  const getErrorMessage = useGetErrorMessage();
  const errorMessage =
    error && getErrorMessage(error, "Ошибка получения списка категорий");

  return (
    <>
      <Typography variant={"subtitle1"} sx={{ textAlign: "center" }}>
        Категории
      </Typography>

      <Paper elevation={3} sx={{ p: 1, mt: 1 }}>
        {error && <Alert severity="error">{errorMessage}</Alert>}
        {isLoading && <LoadingSpinner />}

        {!isLoading &&
          !error &&
          (data?.length ? (
            <NoteCategoryList categoryList={data} />
          ) : (
            <Alert severity="warning">
              Вы ещё не создали ни одной категории
            </Alert>
          ))}
      </Paper>
    </>
  );
};

export default NoteCategoriesBlock;
