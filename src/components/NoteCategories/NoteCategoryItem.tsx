import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { useActions } from "hooks/store/useActions";
import { INoteCategory } from "types/notesTypes";
import { AppRoutes } from "constants/AppRoutes";

import ListItemOptions from "components/ListItemOptions";

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
    <ListItem
      disablePadding
      disableGutters
      sx={{
        "&:not(:last-child)": {
          borderBottom: "1px solid rgba(0, 0, 0, .125)",
        },
      }}
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
  );
};

export default NoteCategoryItem;
