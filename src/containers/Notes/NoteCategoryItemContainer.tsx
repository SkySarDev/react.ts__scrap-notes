import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "services/api/noteCategoriesApi";
import { AppRoutes } from "constants/AppRoutes";
import { IFormAddNotesValues, INoteCategory } from "types/notesTypes";

import NoteCategoryItem from "components/NoteCategories/NoteCategoryItem";
import DeleteCategoryModal from "components/Modals/DeleteCategoryModal";
import FormAddNotesModal from "components/Modals/FormAddNotesModal";

interface IProps {
  categoryItem: INoteCategory;
}

const NoteCategoryItemContainer: FC<IProps> = ({ categoryItem }) => {
  const navigate = useNavigate();
  const { category } = useParams();
  const isCurrenCategory = category === categoryItem._id;
  const [deleteCategory, deleteCategoryUtils] = useDeleteCategoryMutation();
  const [updateCategory, updateCategoryUtils] = useUpdateCategoryMutation();
  const [isShowModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [isShowModalEdit, setShowModalEdit] = useState<boolean>(false);

  const showModalDelete = (): void => setShowModalDelete(true);
  const hideModalDelete = (): void => setShowModalDelete(false);

  const showModalEdit = (): void => setShowModalEdit(true);
  const hideModalEdit = (): void => setShowModalEdit(false);

  const deleteItem = () => deleteCategory(categoryItem._id);

  const updateItem = (data: IFormAddNotesValues): void => {
    if (categoryItem.title !== data.title) {
      updateCategory({
        _id: categoryItem._id,
        title: data.title,
      });
    }

    hideModalEdit();
  };

  useEffect(() => {
    if (updateCategoryUtils.isSuccess) {
      hideModalEdit();
    }
  }, [updateCategoryUtils.isSuccess]);

  useEffect(() => {
    if (deleteCategoryUtils.isSuccess) {
      hideModalDelete();

      if (isCurrenCategory) {
        navigate(AppRoutes.NOTES);
      }
    }
  }, [deleteCategoryUtils.isSuccess]);

  return (
    <>
      <NoteCategoryItem
        categoryItem={categoryItem}
        isCurrenCategory={isCurrenCategory}
        showModalEdit={showModalEdit}
        showModalDelete={showModalDelete}
      />

      <DeleteCategoryModal
        isShowModal={isShowModalDelete}
        handleCloseModal={hideModalDelete}
        modalTitle={"Удалить категорию?"}
        isLoading={deleteCategoryUtils.isLoading}
        onClickCallback={deleteItem}
      />

      <FormAddNotesModal
        isShowModal={isShowModalEdit}
        handleCloseModal={hideModalEdit}
        formValues={{ title: categoryItem.title }}
        submitCallback={updateItem}
        modalTitle={"Редактирование категории"}
        buttonText={"Сохранить"}
        isLoading={updateCategoryUtils.isLoading}
      />
    </>
  );
};

export default NoteCategoryItemContainer;
