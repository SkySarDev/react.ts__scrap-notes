import React, { FC, ReactElement } from "react";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import ModalWrapper from "components/Modals/ModalWrapper";

interface IProps {
  isShowModal: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
  isLoading: boolean;
  confirmCallback: () => void;
}

const DeleteItemListDialog: FC<IProps> = ({
  isShowModal,
  handleCloseModal,
  modalTitle,
  isLoading,
  confirmCallback,
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
          onClick={confirmCallback}
        >
          Удалить
        </LoadingButton>
      </Box>
    </ModalWrapper>
  );
};

export default DeleteItemListDialog;