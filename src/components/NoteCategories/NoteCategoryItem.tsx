import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { INoteCategory } from "types/notesTypes";
import { AppRoutes } from "constants/AppRoutes";

import ListItemOptions from "components/ListItemOptions";

interface IProps {
  categoryItem: INoteCategory;
  showModalEdit: () => void;
  showModalDelete: () => void;
  isCurrenCategory: boolean;
}

const NoteCategoryItem: FC<IProps> = ({
  categoryItem,
  isCurrenCategory,
  showModalEdit,
  showModalDelete,
}) => {
  const { _id, title } = categoryItem;

  return (
    <>
      <ListItem
        disablePadding
        disableGutters
        secondaryAction={
          <ListItemOptions
            deleteItem={showModalDelete}
            editItem={showModalEdit}
          />
        }
      >
        <ListItemButton
          component={Link}
          to={`${AppRoutes.NOTES}/${_id}`}
          selected={isCurrenCategory}
        >
          <ListItemText>{title}</ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NoteCategoryItem;
