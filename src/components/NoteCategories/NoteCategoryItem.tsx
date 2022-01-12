import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { INoteCategory } from "types/notesTypes";
import { AppRoutes } from "constants/AppRoutes";

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
  deleteCategory: (_id: string) => void;
  deleteLoading: boolean;
  deleteSuccess: boolean;
  updateCategory: (categoryInfo: INoteCategory) => void;
  updateLoading: boolean;
  updateSuccess: boolean;
}

const NoteCategoryItem: FC<IProps> = ({
  categoryItem,
  deleteCategory,
  deleteLoading,
  deleteSuccess,
  updateCategory,
  updateLoading,
  updateSuccess,
}) => {
  const navigate = useNavigate();
  const { category } = useParams();
  const { _id, name } = categoryItem;
  const isCurrenCategory = category === _id;
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

    if (deleteSuccess) {
      deleteItemCloseModal();

      if (isCurrenCategory) {
        navigate(AppRoutes.NOTES);
      }
    }
  }, [deleteSuccess, updateSuccess]);

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
          to={`${AppRoutes.NOTES}/${_id}`}
          selected={isCurrenCategory}
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
        isLoading={deleteLoading}
        callback={deleteItem}
      />
    </>
  );
};

export default NoteCategoryItem;
