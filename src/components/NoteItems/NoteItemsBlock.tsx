import React, { FC, ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Paper, Typography } from "@mui/material";

import { filterNotesByCategory, lastNotesSortByDate } from "utils/noteFilters";
import { parseResponseErrorMessage } from "utils/parseResponseErrorMessage";
import { INoteItem, INoteListData } from "types/notesTypes";

import NoteList from "components/NoteItems/NoteList";
import LoadingSpinner from "components/UI/LoadingSpinner";

const lastNoteStyles = {
  mb: 1,
  textAlign: "center",
  color: "#888",
  fontStyle: "italic",
};

interface IProps {
  noteListData: INoteListData;
}

const NoteItemsBlock: FC<IProps> = ({ noteListData }): ReactElement => {
  const { category: currentCategory } = useParams();
  const { data, error, isLoading } = noteListData;
  const [noteList, setNoteList] = useState<INoteItem[] | null>(null);
  const errorMessage =
    error &&
    parseResponseErrorMessage(error, "Ошибка получения списка заметок");

  useEffect(() => {
    if (data) {
      const filteredResult = currentCategory
        ? filterNotesByCategory(data, currentCategory)
        : lastNotesSortByDate(data);

      setNoteList(filteredResult);
    }
  }, [data, currentCategory]);

  return (
    <>
      <Typography variant={"subtitle1"} sx={{ textAlign: "center" }}>
        Заметки
      </Typography>

      <Paper elevation={3} sx={{ p: 1, mt: 1 }}>
        {error && <Alert severity="error">{errorMessage}</Alert>}
        {isLoading && <LoadingSpinner />}

        {!isLoading &&
          !error &&
          (noteList?.length ? (
            <>
              {!currentCategory && (
                <Typography variant={"body2"} sx={lastNoteStyles}>
                  Последние заметки:
                </Typography>
              )}
              <NoteList noteList={noteList} currentCategory={currentCategory} />
            </>
          ) : (
            <>
              {currentCategory ? (
                <Alert severity="warning">
                  В данной категории ещё нет заметок
                </Alert>
              ) : (
                <Alert severity="warning">У вас ещё нет заметок</Alert>
              )}
            </>
          ))}
      </Paper>
    </>
  );
};

export default NoteItemsBlock;
