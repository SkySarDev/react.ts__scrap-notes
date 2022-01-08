import React, { FC, ReactElement } from "react";

import { INoteItem } from "types/notesTypes";

import NoteItem from "components/NoteItems/NoteItem";
import { useDeleteNoteMutation } from "services/api/noteItemsApi";

interface INoteItemContainerProps {
  noteItem: INoteItem;
}

const NoteItemContainer: FC<INoteItemContainerProps> = ({
  noteItem,
}): ReactElement => {
  const [deleteNote] = useDeleteNoteMutation();

  return <NoteItem noteItem={noteItem} deleteNote={deleteNote} />;
};

export default NoteItemContainer;
