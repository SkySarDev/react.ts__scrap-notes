import { dialogReducer } from "services/modalsPopupsDialogs/dialogReducer";
import { popupReducer } from "services/modalsPopupsDialogs/popupReducer";
import { modalReducer } from "services/modalsPopupsDialogs/modalReducer";

export const storeActions = {
  ...dialogReducer.actions,
  ...popupReducer.actions,
  ...modalReducer.actions,
};
