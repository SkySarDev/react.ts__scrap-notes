import { useState } from "react";
import { AlertColor } from "@mui/material";

interface IPopupState {
  message: string | null;
  type: AlertColor | null;
}

export const usePopupNoticeState = () => {
  const initState: IPopupState = { message: null, type: null };
  const [popupState, setPopupState] = useState(initState);

  const showPopupNotice = (value: IPopupState): void => {
    setPopupState(value);
  };

  return { popupState, showPopupNotice };
};
