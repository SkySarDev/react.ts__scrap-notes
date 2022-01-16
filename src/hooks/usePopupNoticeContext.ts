import { useContext } from "react";
import { PopupContext } from "store/popupContext";

export const usePopupNoticeContext = () => {
  const popupContext = useContext(PopupContext);

  if (!popupContext) {
    throw new Error(
      "usePopupNoticeContext must be used within the PopupContext.Provider"
    );
  }

  return popupContext;
};
