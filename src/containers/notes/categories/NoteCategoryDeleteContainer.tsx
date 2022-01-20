import React, { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGetAllNotesQuery } from "services/api/noteItemsApi";
import { useDeleteCategoryMutation } from "services/api/noteCategoriesApi";
import { usePopupNoticeContext } from "hooks/usePopupNoticeContext";
import { IDeleteCategoryModalState } from "types/notesTypes";
import { PopupNoticeMessages } from "constants/PopupNoticeMessages";
import { AppRoutes } from "constants/AppRoutes";

import DeleteItemListDialog from "components/Modals/DeleteItemListDialog";

interface IProps {
  deleteModalState: IDeleteCategoryModalState;
  closeModalDeleteCategory: () => void;
  isCurrenCategory?: string;
}

const NoteCategoryDeleteContainer: FC<IProps> = ({
  deleteModalState,
  closeModalDeleteCategory,
  isCurrenCategory,
}): ReactElement => {
  const { showPopupNotice } = usePopupNoticeContext();
  const navigate = useNavigate();

  const { refetch } = useGetAllNotesQuery();
  const [deleteCategoryFromDB, { isSuccess, isLoading, isError }] =
    useDeleteCategoryMutation();

  const { _id, isShow } = deleteModalState;
  const popupMessages = PopupNoticeMessages.category.delete;

  const deleteCategory = () => {
    if (_id) {
      deleteCategoryFromDB(_id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
      closeModalDeleteCategory();
      showPopupNotice(popupMessages.success);
      isCurrenCategory && navigate(AppRoutes.NOTES);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      closeModalDeleteCategory();
      showPopupNotice(popupMessages.error);
    }
  }, [isError]);

  return (
    <DeleteItemListDialog
      isShowModal={isShow}
      handleCloseModal={closeModalDeleteCategory}
      modalTitle={"Удалить категорию?"}
      isLoading={isLoading}
      confirmCallback={deleteCategory}
    />
  );
};

export default NoteCategoryDeleteContainer;
