import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { INoteCategory } from "types/notesTypes";
import { AppRoutes } from "constants/AppRoutes";

import ListItemOptions from "components/ListItemOptions";

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
  const { _id, name } = categoryItem;

  return (
    <>
      <ListItem
        disablePadding
        disableGutters
        sx={listItemStyles}
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
          <ListItemText>{name}</ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NoteCategoryItem;
