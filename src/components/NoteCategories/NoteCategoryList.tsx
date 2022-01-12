import React, { FC, useEffect, useState } from "react";
import { Box, Button, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { INoteCategory } from "types/notesTypes";

import NoteCategoryItemContainer from "containers/Notes/NoteCategoryItemContainer";
import AddOrEditCategoryModal from "components/Modals/AddOrEditCategoryModal";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "constants/AppRoutes";

interface INoteCategoryListProps {
  categoryList?: INoteCategory[];
  addCategory: (value: Omit<INoteCategory, "_id">) => void;
  addCategoryLoading: boolean;
  newCategoryId?: string;
}

const NoteCategoryList: FC<INoteCategoryListProps> = ({
  categoryList,
  addCategory,
  addCategoryLoading,
  newCategoryId,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = (): void => setIsModalOpen(true);
  const handleModalClose = (): void => setIsModalOpen(false);
  const handleAddCategory = (value: string): void =>
    addCategory({ name: value });

  useEffect(() => {
    if (newCategoryId) {
      handleModalClose();
      navigate(`${AppRoutes.NOTES}/${newCategoryId}`);
    }
  }, [newCategoryId]);

  return (
    <>
      {categoryList?.length ? (
        <List>
          {categoryList.map((categoryItem) => (
            <NoteCategoryItemContainer
              key={categoryItem._id}
              categoryItem={categoryItem}
            />
          ))}
        </List>
      ) : (
        <div>Нет категорий</div>
      )}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button startIcon={<AddIcon />} onClick={handleModalOpen}>
          Добавить категорию
        </Button>
      </Box>

      <AddOrEditCategoryModal
        isShowModal={isModalOpen}
        handleCloseModal={handleModalClose}
        modalTitle={"Добавление категории"}
        buttonText={"Добавить"}
        categoryName={""}
        onClickCallback={handleAddCategory}
        isLoading={addCategoryLoading}
      />
    </>
  );
};

export default NoteCategoryList;
