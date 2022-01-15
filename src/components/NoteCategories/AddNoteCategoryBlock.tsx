import React, { FC, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { AppRoutes } from "constants/AppRoutes";
import { IAddCategoryUtils, IFormAddNotesValues } from "types/notesTypes";

import FormAddNotesModal from "components/Modals/FormAddNotesModal";

interface IProps {
  addNewCategory: (data: IFormAddNotesValues) => void;
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

  const handleAddCategory = (data: IFormAddNotesValues): void => {
    addNewCategory(data);
  };

  useEffect(() => {
    if (error || newCategoryId) {
      handleModalClose();

      newCategoryId && navigate(`${AppRoutes.NOTES}/${newCategoryId}`);
    }
  }, [error, newCategoryId]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1.5 }}>
        <Button startIcon={<AddIcon />} onClick={handleModalOpen}>
          Добавить категорию
        </Button>
      </Box>

      <FormAddNotesModal
        isShowModal={isModalOpen}
        handleCloseModal={handleModalClose}
        formValues={{ title: "" }}
        submitCallback={handleAddCategory}
        modalTitle={"Добавление категории"}
        buttonText={"Добавить"}
        isLoading={isLoading}
      />
    </>
  );
};

export default AddNoteCategoryBlock;
