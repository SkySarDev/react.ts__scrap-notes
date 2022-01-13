import React, { FC, ReactElement } from "react";
import { Alert, AlertColor, Snackbar, SnackbarOrigin } from "@mui/material";

interface IProps {
  isShow: boolean;
  handleClose: () => void;
  message: string | null;
  messageType: AlertColor | null;
}

const PopupMessage: FC<IProps> = ({
  isShow,
  handleClose,
  message,
  messageType,
}): ReactElement => {
  const position: SnackbarOrigin = {
    vertical: "top",
    horizontal: "right",
  };

  return (
    <>
      {message && messageType && (
        <Snackbar
          anchorOrigin={position}
          open={isShow}
          onClose={handleClose}
          autoHideDuration={5000}
          sx={{ mt: 7 }}
        >
          <Alert severity={messageType}>{message}</Alert>
        </Snackbar>
      )}
    </>
  );
};

export default PopupMessage;
