import React, { FC, ReactElement, useEffect, useState } from "react";
import { AlertColor } from "@mui/material";

import { noteCategoriesApi } from "services/api/noteCategoriesApi";
import { AddNewCategoryDataType } from "types/notesTypes";

import NotesMainView from "views/NotesMainView";
import PopupMessage from "components/UI/PopupMessage";
import { useGetErrorMessage } from "hooks/useGetErrorMessage";

interface IPopupState {
  isShow: boolean;
  message: string | null;
  messageType: AlertColor | null;
}

const NotesMainContainer: FC = (): ReactElement => {
  const categoryListData = noteCategoriesApi.useGetAllCategoriesQuery();
  const [addCategoryToDB, addCategoryUtils] =
    noteCategoriesApi.useAddCategoryMutation();

  const [popupState, setPopupState] = useState<IPopupState>({
    isShow: false,
    message: null,
    messageType: null,
  });
  const getErrorMessage = useGetErrorMessage();

  const handlePopupClose = (): void => {
    setPopupState({ ...popupState, isShow: false });
  };

  const addNewCategory = (data: AddNewCategoryDataType) => {
    addCategoryToDB(data);
  };

  useEffect(() => {
    const { error, isSuccess } = addCategoryUtils;
    let message = null as string | null;
    let messageType = null as AlertColor | null;

    if (isSuccess) {
      message = "Категория добавлена";
      messageType = "success";
    }

    if (error) {
      message = getErrorMessage(error, "Ошибка добавления категории");
      messageType = "error";
    }

    setPopupState({ ...popupState, isShow: true, message, messageType });
  }, [addCategoryUtils]);

  return (
    <>
      <NotesMainView
        categoryListData={categoryListData}
        addNewCategory={addNewCategory}
        addCategoryUtils={addCategoryUtils}
      />

      <PopupMessage
        isShow={popupState.isShow}
        handleClose={handlePopupClose}
        message={popupState.message}
        messageType={popupState.messageType}
      />
    </>
  );
};

export default NotesMainContainer;
