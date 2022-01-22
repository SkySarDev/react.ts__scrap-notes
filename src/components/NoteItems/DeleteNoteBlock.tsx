import React, { FC, ReactElement, useEffect } from "react";

import { useActions } from "hooks/store/useActions";
import { useAppSelector } from "hooks/store/reduxHooks";
import { PopupNoticeMessages } from "constants/PopupNoticeMessages";
import { INoteResponseStatuses } from "types/notesTypes";

import DeleteItemListDialog from "components/Modals/DeleteItemListDialog";

interface IProps {
  deleteNote: (id: string) => void;
  deleteNoteUtils: INoteResponseStatuses;
}

const DeleteNoteBlock: FC<IProps> = ({
  deleteNote,
  deleteNoteUtils,
}): ReactElement => {
  const popupMessages = PopupNoticeMessages.note.delete;
  const { _id } = useAppSelector((state) => state.dialog.note);
  const { hideDeleteDialog, showPopup } = useActions();
  const { isLoading, isSuccess, isError } = deleteNoteUtils;

  const handleDeleteNote = () => {
    if (_id) deleteNote(_id);
  };

  const handleCloseDialog = () => hideDeleteDialog("note");

  useEffect(() => {
    if (isSuccess) {
      handleCloseDialog();
      showPopup(popupMessages.success);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      handleCloseDialog();
      showPopup(popupMessages.error);
    }
  }, [isError]);

  return (
    <DeleteItemListDialog
      isShowModal={Boolean(_id)}
      handleCloseDialog={handleCloseDialog}
      modalTitle={"Удалить заметку?"}
      isLoading={isLoading}
      confirmCallback={handleDeleteNote}
    />
  );
};

export default DeleteNoteBlock;
