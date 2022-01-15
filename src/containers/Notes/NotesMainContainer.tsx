import React, { FC, ReactElement, useEffect, useState } from "react";
import { AlertColor } from "@mui/material";

import { noteCategoriesApi } from "services/api/noteCategoriesApi";
import { noteItemsApi } from "services/api/noteItemsApi";
import { AddNewCategoryDataType, IFormAddNotesValues } from "types/notesTypes";
import { useGetErrorMessage } from "hooks/useGetErrorMessage";

import NotesMainView from "views/NotesMainView";
import PopupMessage from "components/UI/PopupMessage";
import { useParams } from "react-router-dom";

interface IPopupState {
  isShow: boolean;
  message: string | null;
  messageType: AlertColor | null;
}

const NotesMainContainer: FC = (): ReactElement => {
  const { category } = useParams();
  const categoryListData = noteCategoriesApi.useGetAllCategoriesQuery();
  const [addCategoryToDB, addCategoryUtils] =
    noteCategoriesApi.useAddCategoryMutation();
  const noteListData = noteItemsApi.useGetAllNotesQuery();
  const [addNoteToDB, addNoteUtils] = noteItemsApi.useAddNoteMutation();

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

  const addNewNote = (data: IFormAddNotesValues) => {
    if (category) {
      const { title, body } = data;
      addNoteToDB({ title, body, categoryId: category });
    }
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
        currentCategory={category}
        categoryListData={categoryListData}
        noteListData={noteListData}
        addNewCategory={addNewCategory}
        addCategoryUtils={addCategoryUtils}
        addNewNote={addNewNote}
        addNoteUtils={addNoteUtils}
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
