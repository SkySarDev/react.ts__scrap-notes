import React, { FC, ReactElement } from "react";

import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
} from "services/api/noteCategoriesApi";
import { useGetAllNotesQuery } from "services/api/noteItemsApi";
import { AddCategoryDataType } from "types/notesTypes";
import { IEditCategoryData } from "types/modalsTypes";

import NoteCategoriesBlock from "components/NoteCategories/NoteCategoriesBlock";
import AddCategoryBlock from "components/NoteCategories/AddCategoryBlock";
import EditCategoryBlock from "components/NoteCategories/EditCategoryBlock";
import DeleteCategoryBlock from "components/NoteCategories/DeleteCategoryBlock";

const NoteCategoriesContainer: FC = (): ReactElement => {
  const categoryListData = useGetAllCategoriesQuery();
  const [addCategoryToDB, addCategoryUtils] = useAddCategoryMutation();
  const [updateCategoryInDB, updateCategoryUtils] = useUpdateCategoryMutation();
  const [deleteCategoryFromDB, deleteCategoryUtils] =
    useDeleteCategoryMutation();
  const { refetch } = useGetAllNotesQuery();

  const addNewCategory = (data: AddCategoryDataType) =>
    addCategoryToDB({ title: data.title });
  const updateCategory = (data: IEditCategoryData) => updateCategoryInDB(data);
  const deleteCategory = (id: string) => deleteCategoryFromDB(id);

  return (
    <>
      <NoteCategoriesBlock categoryListData={categoryListData} />
      <AddCategoryBlock
        addNewCategory={addNewCategory}
        addCategoryUtils={addCategoryUtils}
      />
      <EditCategoryBlock
        updateCategory={updateCategory}
        updateCategoryUtils={updateCategoryUtils}
      />
      <DeleteCategoryBlock
        deleteCategory={deleteCategory}
        deleteCategoryUtils={deleteCategoryUtils}
        refetchNotes={refetch}
      />
    </>
  );
};

export default NoteCategoriesContainer;
