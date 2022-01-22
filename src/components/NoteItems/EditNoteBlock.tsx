import React, { FC, ReactElement, useEffect } from "react";

import { AddNoteDataType, INoteResponseStatuses } from "types/notesTypes";
import { IEditNoteData } from "types/modalsTypes";
import { useActions } from "hooks/store/useActions";
import { useAppSelector } from "hooks/store/reduxHooks";
import { PopupNoticeMessages } from "constants/PopupNoticeMessages";

import FormAddNotesModal from "components/Modals/FormAddNotesModal";

interface IProps {
  updateNote: (data: IEditNoteData) => void;
  updateNoteUtils: INoteResponseStatuses;
}

const EditNoteBlock: FC<IProps> = ({
  updateNote,
  updateNoteUtils,
}): ReactElement => {
  const { showPopup, hideModal } = useActions();
  const { isShow, data } = useAppSelector((state) => state.modal.note.edit);
  const { isSuccess, isLoading, isError } = updateNoteUtils;
  const popupMessages = PopupNoticeMessages.note.edit;

  const handleEditNote = (values: AddNoteDataType): void => {
    if (data) {
      const { title, body } = values;
      updateNote({ _id: data._id, title, body });
    }
  };

  const hideModalEditNote = () => hideModal({ type: "note", act: "edit" });

  useEffect(() => {
    if (isSuccess) {
      showPopup(popupMessages.success);
      hideModalEditNote();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      showPopup(popupMessages.error);
      hideModalEditNote();
    }
  }, [isError]);

  return (
    <>
      {data && (
        <FormAddNotesModal
          isShowModal={isShow}
          handleCloseModal={hideModalEditNote}
          formValues={{ ...data }}
          modalTitle="Редактирование заметки"
          buttonText="Сохранить"
          submitCallback={handleEditNote}
          isLoading={isLoading}
          isNote
        />
      )}
    </>
  );
};

export default EditNoteBlock;
