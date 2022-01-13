import React, { FC, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { AppRoutes } from "constants/AppRoutes";
import { AddNewCategoryDataType, IAddCategoryUtils } from "types/notesTypes";

import AddOrEditCategoryModal from "components/Modals/AddOrEditCategoryModal";

interface IProps {
  addNewCategory: (data: AddNewCategoryDataType) => void;
  addCategoryUtils: IAddCategoryUtils;
}

const AddNoteCategoryBlock: FC<IProps> = ({
  addNewCategory,
  addCategoryUtils,
}): ReactElement => {
  const navigate = useNavigate();
  const { data, error, isLoading } = addCategoryUtils;
  const newCategoryId = data?._id;
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = (): void => setModalOpen(true);
  const handleModalClose = (): void => setModalOpen(false);
  const handleAddCategory = (name: string): void => addNewCategory({ name });

  useEffect(() => {
    if (newCategoryId) {
      navigate(`${AppRoutes.NOTES}/${newCategoryId}`);
    }

    handleModalClose();
  }, [error, newCategoryId]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
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
        isLoading={isLoading}
      />
    </>
  );
};

export default AddNoteCategoryBlock;
