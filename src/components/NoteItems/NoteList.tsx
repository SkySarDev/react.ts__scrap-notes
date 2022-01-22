import React, { FC, useState } from "react";
import { Alert, Typography } from "@mui/material";

import { INoteItem } from "types/notesTypes";

import NoteItem from "components/NoteItems/NoteItem";

interface IProps {
  noteList: INoteItem[];
  currentCategory?: string;
}

const lastNoteStyles = {
  mb: 1,
  textAlign: "center",
  color: "#888",
  fontStyle: "italic",
};

const NoteList: FC<IProps> = ({ noteList, currentCategory }) => {
  const [expandedNote, setExpandedNote] = useState<string | false>(false);

  const changeExpandedNote = (value: string | false): void =>
    setExpandedNote(value);

  return (
    <>
      {!currentCategory && (
        <Typography variant={"body2"} sx={lastNoteStyles}>
          Последние заметки:
        </Typography>
      )}
      {noteList.length ? (
        noteList.map((note) => (
          <NoteItem
            key={note._id}
            noteItem={note}
            expandedNote={expandedNote}
            changeExpandedNote={changeExpandedNote}
          />
        ))
      ) : (
        <>
          {currentCategory ? (
            <Alert severity="warning">В данной категории ещё нет заметок</Alert>
          ) : (
            <Alert severity="warning">У вас ещё нет заметок</Alert>
          )}
        </>
      )}
    </>
  );
};

export default NoteList;
