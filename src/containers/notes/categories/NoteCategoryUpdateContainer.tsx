import React, { FC, ReactElement, useEffect } from "react";

import { useUpdateCategoryMutation } from "services/api/noteCategoriesApi";
import { IEditCategoryModalState, IFormAddNotesValues } from "types/notesTypes";

import FormAddNotesModal from "components/Modals/FormAddNotesModal";
import { usePopupNoticeContext } from "hooks/usePopupNoticeContext";
import { PopupNoticeMessages } from "constants/PopupNoticeMessages";

interface IProps {
  editModalState: IEditCategoryModalState;
  closeModalEditCategory: () => void;
}

const NoteCategoryUpdateContainer: FC<IProps> = ({
  editModalState,
  closeModalEditCategory,
}): ReactElement => {
  const { showPopupNotice } = usePopupNoticeContext();
  const [updateCategoryInDB, { isSuccess, isLoading, isError }] =
    useUpdateCategoryMutation();

  const { isShow, values, _id } = editModalState;
  const formValues = values || { title: "", body: null };
  const popupMessages = PopupNoticeMessages.category.edit;

  const editCategory = (newValues: IFormAddNotesValues): void => {
    if (_id && values?.title !== newValues.title) {
      const { title } = newValues;
      updateCategoryInDB({ _id, title });
    } else {
      closeModalEditCategory();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      closeModalEditCategory();
      showPopupNotice(popupMessages.success);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      closeModalEditCategory();
      showPopupNotice(popupMessages.error);
    }
  }, [isError]);

  return (
    <FormAddNotesModal
      isShowModal={isShow}
      handleCloseModal={closeModalEditCategory}
      formValues={formValues}
      modalTitle={"Редактирование категории"}
      buttonText={"Сохранить"}
      isLoading={isLoading}
      submitCallback={editCategory}
    />
  );
};

export default NoteCategoryUpdateContainer;
