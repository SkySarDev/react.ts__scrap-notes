import React, { FC, ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PopupNoticeMessages } from "constants/PopupNoticeMessages";
import { useAppSelector } from "hooks/store/reduxHooks";
import { useActions } from "hooks/store/useActions";
import { INoteResponseStatuses } from "types/notesTypes";
import { AppRoutes } from "constants/AppRoutes";

import DeleteItemListDialog from "components/Modals/DeleteItemListDialog";

interface IProps {
  deleteCategory: (id: string) => void;
  deleteCategoryUtils: INoteResponseStatuses;
  refetchNotes: () => void;
}

const DeleteCategoryBlock: FC<IProps> = ({
  deleteCategory,
  deleteCategoryUtils,
  refetchNotes,
}): ReactElement => {
  const popupMessages = PopupNoticeMessages.category.delete;
  const navigate = useNavigate();
  const { category } = useParams();
  const { _id } = useAppSelector((state) => state.dialog.category);
  const { hideDeleteDialog, showPopup } = useActions();
  const { isLoading, isSuccess, isError } = deleteCategoryUtils;

  const handleDeleteCategory = () => {
    if (_id) deleteCategory(_id);
  };

  const handleCloseDialog = () => hideDeleteDialog("category");

  useEffect(() => {
    if (isSuccess) {
      refetchNotes();
      category && navigate(AppRoutes.NOTES);
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
      modalTitle={"Удалить категорию?"}
      isLoading={isLoading}
      confirmCallback={handleDeleteCategory}
    />
  );
};

export default DeleteCategoryBlock;
