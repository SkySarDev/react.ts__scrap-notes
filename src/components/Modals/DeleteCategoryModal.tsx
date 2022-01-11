import React, { FC, ReactElement } from "react";
import { Box, Button } from "@mui/material";

import ModalWrapper from "components/Modals/ModalWrapper";

interface IProps {
  isShowModal: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
  callback: () => void;
}

const DeleteCategoryModal: FC<IProps> = ({
  isShowModal,
  handleCloseModal,
  modalTitle,
  callback,
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
        <Button variant="contained" onClick={callback}>
          Удалить
        </Button>
      </Box>
    </ModalWrapper>
  );
};

export default DeleteCategoryModal;
