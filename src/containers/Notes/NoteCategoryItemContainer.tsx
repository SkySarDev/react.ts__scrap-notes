import React, { FC } from "react";

import {
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "services/api/noteCategoriesApi";

import { INoteCategory } from "types/notesTypes";

import NoteCategoryItem from "components/NoteCategories/NoteCategoryItem";

interface IProps {
  categoryItem: INoteCategory;
}

const NoteCategoryItemContainer: FC<IProps> = ({ categoryItem }) => {
  const [
    deleteCategory,
    { isLoading: deleteLoading, isSuccess: deleteSuccess },
  ] = useDeleteCategoryMutation();
  const [
    updateCategory,
    { isLoading: updateLoading, isSuccess: updateSuccess },
  ] = useUpdateCategoryMutation();

  return (
    <NoteCategoryItem
      categoryItem={categoryItem}
      deleteCategory={deleteCategory}
      deleteLoading={deleteLoading}
      deleteSuccess={deleteSuccess}
      updateCategory={updateCategory}
      updateLoading={updateLoading}
      updateSuccess={updateSuccess}
    />
  );
};

export default NoteCategoryItemContainer;
