import React, { FC, ReactElement, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface IProps {
  deleteItem: () => void;
  editItem: () => void;
}

const ListItemOptions: FC<IProps> = ({deleteItem, editItem}): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditItem = () => {
    editItem()
    handleClose();
  };

  const handleDeleteItem = () => {
    deleteItem()
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label={"Опции"}
        onClick={handleMenu}
        sx={{ mr: 1, opacity: 0, transition: "opacity 0.5s" }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEditItem}>Редактировать</MenuItem>
        <MenuItem onClick={handleDeleteItem}>Удалить</MenuItem>
      </Menu>
    </>
  );
};

export default ListItemOptions;
