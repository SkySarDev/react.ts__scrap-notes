import React, { FC, ReactElement } from "react";

import { useDeleteNoteMutation } from "services/api/noteItemsApi";
import { INoteItem } from "types/notesTypes";

import NoteItem from "components/NoteItems/NoteItem";

interface IProps {
  noteItem: INoteItem;
  expandedNote: string | false;
  changeExpandedNote: (value: string | false) => void;
}

const NoteItemContainer: FC<IProps> = ({
  noteItem,
  expandedNote,
  changeExpandedNote,
}): ReactElement => {
  const [deleteNote] = useDeleteNoteMutation();

  return (
    <NoteItem
      noteItem={noteItem}
      deleteNote={deleteNote}
      expandedNote={expandedNote}
      changeExpandedNote={changeExpandedNote}
    />
  );
};

export default NoteItemContainer;
