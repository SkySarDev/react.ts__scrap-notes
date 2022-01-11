import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { INoteCategory } from "types/notesTypes";

import ListItemOptions from "components/ListItemOptions";
import AddOrEditCategoryModal from "components/Modals/AddOrEditCategoryModal";
import DeleteCategoryModal from "components/Modals/DeleteCategoryModal";

const listItemStyles = {
  "&:hover": {
    "&& button": {
      opacity: 1,
      transition: "opacity 1s",
    },
  },
};

interface IProps {
  categoryItem: INoteCategory;
  currentCategory: string | null;
  deleteCategory: (_id: string) => void;
  updateCategory: (categoryInfo: INoteCategory) => void;
  updateLoading: boolean;
  updateSuccess: boolean;
}

const NoteCategoryItem: FC<IProps> = ({
  categoryItem,
  currentCategory,
  deleteCategory,
  updateCategory,
  updateLoading,
  updateSuccess,
}) => {
  const { _id, name } = categoryItem;
  const [modalDeleteShow, setModalDeleteShow] = useState<boolean>(false);
  const [modalEditShow, setModalEditShow] = useState<boolean>(false);

  const editItemOpenModal = (): void => setModalEditShow(true);
  const editItemCloseModal = (): void => setModalEditShow(false);
  const deleteItemOpenModal = (): void => setModalDeleteShow(true);
  const deleteItemCloseModal = (): void => setModalDeleteShow(false);

  const deleteItem = (): void => deleteCategory(_id);

  const updateItem = (newCategoryName: string): void => {
    if (name !== newCategoryName) {
      updateCategory({
        _id,
        name: newCategoryName,
      });
    } else {
      editItemCloseModal();
    }
  };

  useEffect(() => {
    if (updateSuccess) {
      editItemCloseModal();
    }
  }, [updateSuccess]);

  return (
    <>
      <ListItem
        disablePadding
        disableGutters
        sx={listItemStyles}
        secondaryAction={
          <ListItemOptions
            deleteItem={deleteItemOpenModal}
            editItem={editItemOpenModal}
          />
        }
      >
        <ListItemButton
          component={Link}
          to={`?category=${_id}`}
          selected={currentCategory === _id}
        >
          <ListItemText>{name}</ListItemText>
        </ListItemButton>
      </ListItem>

      <AddOrEditCategoryModal
        isShowModal={modalEditShow}
        handleCloseModal={editItemCloseModal}
        modalTitle={"Редактирование категории"}
        buttonText={"Сохранить"}
        categoryName={name}
        isLoading={updateLoading}
        callback={updateItem}
      />

      <DeleteCategoryModal
        isShowModal={modalDeleteShow}
        handleCloseModal={deleteItemCloseModal}
        modalTitle={"Удалить категорию?"}
        callback={deleteItem}
      />
    </>
  );
};

export default NoteCategoryItem;
