import React, { FC, ReactElement } from "react";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";

const style = {
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: 0,
  borderRadius: 1,
  boxShadow: 24,
  p: 3,
  minWidth: 220,
};

interface IProps {
  isShowModal: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
}

const ModalWrapper: FC<IProps> = ({
  isShowModal,
  handleCloseModal,
  modalTitle,
  children,
}): ReactElement => {
  const handleOnClose = () => handleCloseModal();

  return (
    <Modal
      open={isShowModal}
      onClose={handleOnClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isShowModal}>
        <Box position="absolute" sx={style}>
          <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
            {modalTitle}
          </Typography>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalWrapper;
