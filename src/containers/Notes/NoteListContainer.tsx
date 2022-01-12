import React, { FC, ReactElement } from "react";

import {
  useAddNoteMutation,
  useGetNotesByCategoryQuery,
} from "services/api/noteItemsApi";

import Error from "views/Error";
import Loading from "views/Loading";
import NoteList from "components/NoteItems/NoteList";

interface IProps {
  category: string;
}

const NoteListContainer: FC<IProps> = ({ category }): ReactElement => {
  const { data, error, isLoading } = useGetNotesByCategoryQuery(category);
  const [addNote] = useAddNoteMutation();

  if (error) {
    return <Error message={"Ошибка получения заметок"} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <NoteList noteList={data} addNote={addNote} category={category} />;
};

export default NoteListContainer;
