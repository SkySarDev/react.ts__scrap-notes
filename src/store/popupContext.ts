import { createContext } from "react";
import { IPopupNoticeState } from "types/appTypes";

interface IPopupNoticeContext {
  popupState: IPopupNoticeState;
  showPopupNotice: (state: IPopupNoticeState) => void;
}

export const PopupContext = createContext<IPopupNoticeContext | undefined>(
  undefined
);
