import React, { FC, ReactElement } from "react";
import { Alert, Slide, Snackbar, SnackbarOrigin } from "@mui/material";

import { useActions } from "hooks/store/useActions";
import { useAppSelector } from "hooks/store/reduxHooks";

const PopupNotice: FC = (): ReactElement => {
  const { hidePopup } = useActions();
  const {
    isShow,
    value: { message, type },
  } = useAppSelector((state) => state.popup);
  const position: SnackbarOrigin = {
    vertical: "bottom",
    horizontal: "right",
  };

  const handleHidePopup = () => hidePopup();

  return (
    <>
      {message && (
        <Snackbar
          anchorOrigin={position}
          open={isShow}
          onClose={handleHidePopup}
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
