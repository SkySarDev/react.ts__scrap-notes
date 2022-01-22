import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { INoteCategory } from "types/notesTypes";
import { AppRoutes } from "constants/AppRoutes";

import ListItemOptions from "components/ListItemOptions";
import { useActions } from "hooks/store/useActions";

interface IProps {
  categoryItem: INoteCategory;
  currenCategory?: string;
}

const NoteCategoryItem: FC<IProps> = ({ categoryItem, currenCategory }) => {
  const { _id, title } = categoryItem;
  const { showCategoryDialog, showModalEditCategory } = useActions();

  const handleDeleteDialog = () => showCategoryDialog(_id);
  const handleModalEdit = () => showModalEditCategory({ _id, title });

  return (
    <>
      <ListItem
        disablePadding
        disableGutters
        secondaryAction={
          <ListItemOptions
            deleteItem={handleDeleteDialog}
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
