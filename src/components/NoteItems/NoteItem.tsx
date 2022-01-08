import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import { INoteItem } from "types/notesTypes";

interface INoteItemProps {
  noteItem: INoteItem;
  deleteNote: (id: string) => void;
}

const NoteItem: FC<INoteItemProps> = ({
  noteItem,
  deleteNote,
}): ReactElement => {
  const onButtonClick = () => {
    deleteNote(noteItem._id);
  };

  return (
    <li style={{ display: "flex", columnGap: 5, marginBottom: 5 }}>
      <Link to={`?note=${noteItem._id}`} style={{ flex: "1 0 auto" }}>
        {noteItem.title}
      </Link>
      <button onClick={onButtonClick}>X</button>
    </li>
  );
};

export default NoteItem;
