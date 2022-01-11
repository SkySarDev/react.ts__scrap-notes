import React, { FC } from "react";

import {
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "services/api/noteCategoriesApi";

import { INoteCategory } from "types/notesTypes";

import NoteCategoryItem from "components/NoteCategories/NoteCategoryItem";

interface IProps {
  categoryItem: INoteCategory;
  currentCategory: string | null;
}

const NoteCategoryItemContainer: FC<IProps> = ({
  categoryItem,
  currentCategory,
}) => {
  const [deleteCategory] = useDeleteCategoryMutation();
  const [
    updateCategory,
    { isLoading: updateLoading, isSuccess: updateSuccess },
  ] = useUpdateCategoryMutation();

  return (
    <NoteCategoryItem
      categoryItem={categoryItem}
      currentCategory={currentCategory}
      deleteCategory={deleteCategory}
      updateCategory={updateCategory}
      updateLoading={updateLoading}
      updateSuccess={updateSuccess}
    />
  );
};

export default NoteCategoryItemContainer;
