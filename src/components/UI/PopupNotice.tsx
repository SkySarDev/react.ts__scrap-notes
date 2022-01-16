import React, { FC, ReactElement } from "react";
import { Alert, Slide, Snackbar, SnackbarOrigin } from "@mui/material";

import { usePopupNoticeContext } from "hooks/usePopupNoticeContext";

const PopupNotice: FC = (): ReactElement => {
  const { popupState, showPopupNotice } = usePopupNoticeContext();
  const { message, type } = popupState;
  const position: SnackbarOrigin = {
    vertical: "bottom",
    horizontal: "right",
  };

  const handleClose = () => {
    showPopupNotice({ message: null, type: null });
  };

  return (
    <>
      {message && (
        <Snackbar
          anchorOrigin={position}
          open={Boolean(message)}
          onClose={handleClose}
          autoHideDuration={5000}
          TransitionComponent={Slide}
        >
          <Alert severity={type || "warning"}>
            {message || "Неизвестная ошибка"}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default PopupNotice;
