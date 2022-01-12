import React, { FC, ReactElement } from "react";

import {
  useAddCategoryMutation,
  useGetAllCategoriesQuery,
} from "services/api/noteCategoriesApi";

import Loading from "views/Loading";
import Error from "views/Error";
import NoteCategoryList from "components/NoteCategories/NoteCategoryList";

const NoteCategoryListContainer: FC = (): ReactElement => {
  const { data: categoryList, error, isLoading } = useGetAllCategoriesQuery();
  const [
    addCategory,
    { data: newCategoryData, isLoading: addCategoryLoading },
  ] = useAddCategoryMutation();

  if (error) {
    const errorMessage =
      "data" in error
        ? error.data.message
        : "Ошибка получения списка категорий";

    return <Error message={errorMessage} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NoteCategoryList
      categoryList={categoryList}
      addCategory={addCategory}
      newCategoryId={newCategoryData?._id}
      addCategoryLoading={addCategoryLoading}
    />
  );
};

export default NoteCategoryListContainer;
