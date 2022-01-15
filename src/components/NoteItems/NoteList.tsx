import React, { FC, useEffect, useState } from "react";

import { INoteItem } from "types/notesTypes";

import NoteItemContainer from "containers/Notes/NoteItemContainer";

interface IProps {
  noteList: INoteItem[];
  currentCategory?: string;
}

const NoteList: FC<IProps> = ({ noteList, currentCategory }) => {
  const [expandedNote, setExpandedNote] = useState<string | false>(false);

  const changeExpandedNote = (value: string | false): void =>
    setExpandedNote(value);

  useEffect(() => setExpandedNote(false), [currentCategory]);

  return (
    <>
      {noteList.map((note) => (
        <NoteItemContainer
          key={note._id}
          noteItem={note}
          expandedNote={expandedNote}
          changeExpandedNote={changeExpandedNote}
        />
      ))}
    </>
  );
};

export default NoteList;
