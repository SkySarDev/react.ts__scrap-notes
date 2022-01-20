import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { IFormAddNotesValues, INoteCategory } from "types/notesTypes";
import { AppRoutes } from "constants/AppRoutes";

import ListItemOptions from "components/ListItemOptions";

interface IProps {
  categoryItem: INoteCategory;
  currenCategory?: string;
  openModalEditCategory: (data: IFormAddNotesValues, _id: string) => void;
  openModalDeleteCategory: (id: string) => void;
}

const NoteCategoryItem: FC<IProps> = ({
  categoryItem,
  currenCategory,
  openModalEditCategory,
  openModalDeleteCategory,
}) => {
  const { _id, title } = categoryItem;

  const handleModalDelete = () => {
    openModalDeleteCategory(_id);
  };

  const handleModalEdit = () => {
    openModalEditCategory({ title, body: null }, _id);
  };

  return (
    <>
      <ListItem
        disablePadding
        disableGutters
        secondaryAction={
          <ListItemOptions
            deleteItem={handleModalDelete}
            editItem={handleModalEdit}
          />
        }
      >
        <ListItemButton
          component={Link}
          to={`${AppRoutes.NOTES}/${_id}`}
          selected={currenCategory === _id}
        >
          <ListItemText>{title}</ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NoteCategoryItem;
