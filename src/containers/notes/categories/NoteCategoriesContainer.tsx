import React, { FC, ReactElement, useState } from "react";

import {
  useAddCategoryMutation,
  useGetAllCategoriesQuery,
} from "services/api/noteCategoriesApi";
import { IFormAddNotesValues } from "types/notesTypes";

import NoteCategoriesBlock from "components/NoteCategories/NoteCategoriesBlock";
import AddNoteCategoryBlock from "components/NoteCategories/AddNoteCategoryBlock";

const NoteCategoriesContainer: FC = (): ReactElement => {
  const categoryListData = useGetAllCategoriesQuery();
  const [addCategoryToDB, addCategoryUtils] = useAddCategoryMutation();

  const [isShowModal, setShowModal] = useState<boolean>(false);
  const openModalAddCategory = (): void => setShowModal(true);
  const closeModalAddCategory = (): void => setShowModal(false);

  const addNewCategory = (data: IFormAddNotesValues): void => {
    addCategoryToDB({ title: data.title });
  };

  return (
    <>
      <NoteCategoriesBlock
        categoryListData={categoryListData}
        openModalAddCategory={openModalAddCategory}
      />

      <AddNoteCategoryBlock
        isShowModal={isShowModal}
        handleCloseModal={closeModalAddCategory}
        addNewCategory={addNewCategory}
        addCategoryUtils={addCategoryUtils}
      />
    </>
  );
};

export default NoteCategoriesContainer;
