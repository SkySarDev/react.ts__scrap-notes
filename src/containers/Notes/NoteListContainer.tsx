import React, { FC } from "react";

// import { useGetNoteListByCategoryQuery } from "services/noteCategoriesApi";

import Error from "views/Error";
import Loading from "views/Loading";
import NoteList from "components/NoteItems/NoteList";

interface IProps {
  currentCategoryId: number;
}

const NoteListContainer: FC<IProps> = ({ currentCategoryId }) => {
  // const { data, error, isLoading } = useGetNoteListByCategoryQuery({
  //   categoryId: currentCategoryId,
  // });

  // if (error) {
  //   return <Error message={"Ошибка получения заметок"} />;
  // }
  //
  // if (isLoading) {
  //   return <Loading />;
  // }
  // return (
  //   <>
  //     {data?.length ? (
  //       <NoteList noteList={data} />
  //     ) : (
  //       <div>В данной категории ещё нет заметок</div>
  //     )}
  //   </>
  // );

  return <div />;
};

export default NoteListContainer;
