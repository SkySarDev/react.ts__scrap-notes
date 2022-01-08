import React, { FC } from "react";

import { INoteItem } from "types/notesTypes";

import AddNewNoteForm from "components/NoteItems/AddNewNoteForm";
import NoteItemContainer from "containers/Notes/NoteItemContainer";

interface INoteListProps {
  noteList?: INoteItem[];
  category: string;
  addNote: (data: Omit<INoteItem, "_id">) => void;
}

const NoteList: FC<INoteListProps> = ({ noteList, category, addNote }) => {
  return (
    <>
      {noteList?.length ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {noteList.map((note) => (
            <NoteItemContainer noteItem={note} key={note._id} />
          ))}
        </ul>
      ) : (
        <div>В данной категории ещё нет заметок</div>
      )}

      <AddNewNoteForm category={category} addNote={addNote} />
    </>
  );
};

export default NoteList;
