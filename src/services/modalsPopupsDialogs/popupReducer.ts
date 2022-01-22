import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPopupNoticeState } from "types/appTypes";

interface IPopupState {
  isShow: boolean;
  value: IPopupNoticeState;
}

const initialState: IPopupState = {
  isShow: false,
  value: {
    message: null,
    type: null,
  },
};

export const popupReducer = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup: (state, action: PayloadAction<IPopupNoticeState>) => {
      state.isShow = true;
      state.value = action.payload;
    },
    hidePopup: (state) => {
      state.isShow = false;
      state.value = { message: null, type: null };
    },
  },
});
