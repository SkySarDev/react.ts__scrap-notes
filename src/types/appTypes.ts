import { AlertColor } from "@mui/material";

export interface IPopupNoticeState {
  message: string | null;
  type: AlertColor | null;
}

interface IPopupNoticeResult {
  message: string;
  type: AlertColor;
}

export interface IPopupNoticeStatus {
  success: IPopupNoticeResult;
  error: IPopupNoticeResult;
}

export interface IPopupNoticeMessages {
  category: {
    add: IPopupNoticeStatus;
    edit: IPopupNoticeStatus;
    delete: IPopupNoticeStatus;
  };
  note: {
    add: IPopupNoticeStatus;
    edit: IPopupNoticeStatus;
    delete: IPopupNoticeStatus;
  };
}
