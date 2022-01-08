import React from "react";

import {
  useAddCategoryMutation,
  useGetAllCategoriesQuery,
} from "services/api/noteCategoriesApi";

import Loading from "views/Loading";
import Error from "views/Error";
import NoteCategoryList from "components/NoteCategories/NoteCategoryList";

const NoteCategoryListContainer = () => {
  const { data, error, isLoading } = useGetAllCategoriesQuery();
  const [addCategory] = useAddCategoryMutation();

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

  return <NoteCategoryList categoryList={data} addCategory={addCategory} />;
};

export default NoteCategoryListContainer;
