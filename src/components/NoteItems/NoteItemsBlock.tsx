import React, { FC, ReactElement, useEffect, useState } from "react";
import { Alert, Box, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { INoteItem, INoteListData } from "types/notesTypes";

import NoteList from "components/NoteItems/NoteList";
import LoadingSpinner from "components/UI/LoadingSpinner";
import { useActions } from "hooks/store/useActions";
import { useFilterNoteList } from "hooks/useFilterNoteList";

interface IProps {
  noteListData: INoteListData;
  currentCategory?: string;
}

const NoteItemsBlock: FC<IProps> = ({
  noteListData,
  currentCategory,
}): ReactElement => {
  const { data, isError, isLoading } = noteListData;
  const [noteList, setNoteList] = useState<INoteItem[] | null>(null);
  const { showModalAddNote } = useActions();
  const filterList = useFilterNoteList();

  useEffect(() => {
    if (data) {
      setNoteList(filterList(data, currentCategory));
    }
  }, [data, currentCategory]);

  const openModalAddNote = () => showModalAddNote();

  return (
    <>
      <Paper elevation={3} sx={{ p: 1, mt: 1 }}>
        {isError && (
          <Alert severity="error">Ошибка получения списка заметок</Alert>
        )}

        {isLoading && <LoadingSpinner />}

        {noteList && (
          <NoteList noteList={noteList} currentCategory={currentCategory} />
        )}
      </Paper>

      {currentCategory && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1.5 }}>
          <Button startIcon={<AddIcon />} onClick={openModalAddNote}>
            Добавить заметку
          </Button>
        </Box>
      )}
    </>
  );
};

export default NoteItemsBlock;
