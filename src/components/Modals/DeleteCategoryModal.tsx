import React, { FC, ReactElement } from "react";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import ModalWrapper from "components/Modals/ModalWrapper";

interface IProps {
  isShowModal: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
  isLoading: boolean;
  onClickCallback: () => void;
}

const DeleteCategoryModal: FC<IProps> = ({
  isShowModal,
  handleCloseModal,
  modalTitle,
  isLoading,
  onClickCallback,
}): ReactElement => {
  return (
    <ModalWrapper
      isShowModal={isShowModal}
      handleCloseModal={handleCloseModal}
      modalTitle={modalTitle}
    >
      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <Button variant="contained" onClick={handleCloseModal}>
          Отмена
        </Button>
        <LoadingButton
          variant="contained"
          loading={isLoading}
          onClick={onClickCallback}
        >
          Удалить
        </LoadingButton>
      </Box>
    </ModalWrapper>
  );
};

export default DeleteCategoryModal;
