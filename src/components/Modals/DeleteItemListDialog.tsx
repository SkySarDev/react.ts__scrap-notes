import React, { FC, ReactElement } from "react";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import ModalWrapper from "components/Modals/ModalWrapper";

interface IProps {
  isShowModal: boolean;
  handleCloseDialog: () => void;
  modalTitle: string;
  isLoading: boolean;
  confirmCallback: () => void;
}

const DeleteItemListDialog: FC<IProps> = ({
  isShowModal,
  handleCloseDialog,
  modalTitle,
  isLoading,
  confirmCallback,
}): ReactElement => {
  const handleOnClick = () => handleCloseDialog();

  return (
    <ModalWrapper
      isShowModal={isShowModal}
      handleCloseModal={handleCloseDialog}
      modalTitle={modalTitle}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="contained" onClick={handleOnClick}>
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
