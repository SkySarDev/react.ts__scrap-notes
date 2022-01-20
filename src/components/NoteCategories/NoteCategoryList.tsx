import React, { FC, ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, List } from "@mui/material";

import {
  IDeleteCategoryModalState,
  IEditCategoryModalState,
  IFormAddNotesValues,
  INoteCategory,
} from "types/notesTypes";

import NoteCategoryItem from "components/NoteCategories/NoteCategoryItem";
import NoteCategoryDeleteContainer from "containers/notes/categories/NoteCategoryDeleteContainer";
import NoteCategoryUpdateContainer from "containers/notes/categories/NoteCategoryUpdateContainer";

interface IProps {
  categoryList: INoteCategory[];
}

const NoteCategoryList: FC<IProps> = ({ categoryList }): ReactElement => {
  const { category } = useParams();
  const [deleteModalState, setDeleteModalState] =
    useState<IDeleteCategoryModalState>({
      isShow: false,
    });
  const [editModalState, setEditModalState] = useState<IEditCategoryModalState>(
    {
      isShow: false,
    }
  );

  const openModalDeleteCategory = (_id: string): void => {
    setDeleteModalState({ isShow: true, _id });
  };

  const closeModalDeleteCategory = (): void => {
    setDeleteModalState({ isShow: false });
  };

  const openModalEditCategory = (
    values: IFormAddNotesValues,
    _id: string
  ): void => {
    setEditModalState({ isShow: true, values, _id });
  };

  const closeModalEditCategory = (): void => {
    setEditModalState({ isShow: false });
  };

  return (
    <>
      {categoryList.length ? (
        <List sx={{ p: 0 }}>
          {categoryList.map((categoryItem) => (
            <NoteCategoryItem
              key={categoryItem._id}
              categoryItem={categoryItem}
              currenCategory={category}
              openModalEditCategory={openModalEditCategory}
              openModalDeleteCategory={openModalDeleteCategory}
            />
          ))}
        </List>
      ) : (
        <Alert severity="warning">Вы ещё не создали ни одной категории</Alert>
      )}

      <NoteCategoryDeleteContainer
        deleteModalState={deleteModalState}
        closeModalDeleteCategory={closeModalDeleteCategory}
        isCurrenCategory={category}
      />

      <NoteCategoryUpdateContainer
        editModalState={editModalState}
        closeModalEditCategory={closeModalEditCategory}
      />
    </>
  );
};

export default NoteCategoryList;
