import React, { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";

import {
  useAddNoteMutation,
  useDeleteNoteMutation,
  useGetAllNotesQuery,
  useUpdateNoteMutation,
} from "services/api/noteItemsApi";
import { AddNoteDataType } from "types/notesTypes";
import { IEditNoteData } from "types/modalsTypes";

import NoteItemsBlock from "components/NoteItems/NoteItemsBlock";
import AddNoteBlock from "components/NoteItems/AddNoteBlock";
import DeleteNoteBlock from "components/NoteItems/DeleteNoteBlock";
import EditNoteBlock from "components/NoteItems/EditNoteBlock";

const NoteItemsContainer: FC = (): ReactElement => {
  const { category } = useParams();

  const noteListData = useGetAllNotesQuery();
  const [addNoteToDB, addNoteUtils] = useAddNoteMutation();
  const [deleteNoteFromDB, deleteNoteUtils] = useDeleteNoteMutation();
  const [updateNoteInDB, updateNoteUtils] = useUpdateNoteMutation();

  const addNewNote = (data: AddNoteDataType): void => {
    if (category) {
      const { title, body } = data;
      addNoteToDB({ title, body, categoryId: category });
    }
  };

  const updateNote = (data: IEditNoteData) => updateNoteInDB(data);
  const deleteNote = (id: string) => deleteNoteFromDB(id);

  return (
    <>
      <NoteItemsBlock noteListData={noteListData} currentCategory={category} />
      <AddNoteBlock addNewNote={addNewNote} addNoteUtils={addNoteUtils} />
      <EditNoteBlock
        updateNote={updateNote}
        updateNoteUtils={updateNoteUtils}
      />
      <DeleteNoteBlock
        deleteNote={deleteNote}
        deleteNoteUtils={deleteNoteUtils}
      />
    </>
  );
};

export default NoteItemsContainer;
