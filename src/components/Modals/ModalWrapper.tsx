import React, { FC, ReactElement } from "react";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";

const style = {
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: 0,
  borderRadius: 1,
  boxShadow: 24,
  p: 3,
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
  return (
    <Modal
      open={isShowModal}
      onClose={handleCloseModal}
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