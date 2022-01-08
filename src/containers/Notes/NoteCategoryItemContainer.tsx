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
  const [deleteCategory] = useDeleteCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  return (
    <NoteCategoryItem
      categoryItem={categoryItem}
      deleteCategory={deleteCategory}
      updateCategory={updateCategory}
    />
  );
};

export default NoteCategoryItemContainer;
