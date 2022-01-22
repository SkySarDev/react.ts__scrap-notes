import React, { FC, ReactElement, useEffect } from "react";

import { useActions } from "hooks/store/useActions";
import { useAppSelector } from "hooks/store/reduxHooks";
import { AddNoteDataType, INoteResponseStatuses } from "types/notesTypes";
import { PopupNoticeMessages } from "constants/PopupNoticeMessages";

import FormAddNotesModal from "components/Modals/FormAddNotesModal";

interface IProps {
  addNewNote: (data: AddNoteDataType) => void;
  addNoteUtils: INoteResponseStatuses;
}

const AddNoteBlock: FC<IProps> = ({
  addNewNote,
  addNoteUtils,
}): ReactElement => {
  const { showPopup, hideModal } = useActions();
  const { isShow } = useAppSelector((state) => state.modal.note.add);
  const { isSuccess, isLoading, isError } = addNoteUtils;
  const popupMessages = PopupNoticeMessages.note.add;

  const handleAddNote = (data: AddNoteDataType): void => addNewNote(data);
  const hideModalAddNote = () => hideModal({ type: "note", act: "add" });

  useEffect(() => {
    if (isSuccess) {
      showPopup(popupMessages.success);
      hideModalAddNote();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      showPopup(popupMessages.error);
      hideModalAddNote();
    }
  }, [isError]);

  return (
    <FormAddNotesModal
      isShowModal={isShow}
      handleCloseModal={hideModalAddNote}
      formValues={{ title: "", body: "" }}
      modalTitle="Добавление заметки"
      buttonText="Добавить"
      submitCallback={handleAddNote}
      isLoading={isLoading}
      isNote
    />
  );
};

export default AddNoteBlock;
