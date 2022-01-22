import React, { FC, ReactElement, useEffect } from "react";

import { IEditCategoryData } from "types/modalsTypes";
import { AddCategoryDataType, INoteResponseStatuses } from "types/notesTypes";
import { useActions } from "hooks/store/useActions";
import { useAppSelector } from "hooks/store/reduxHooks";
import { PopupNoticeMessages } from "constants/PopupNoticeMessages";

import FormAddNotesModal from "components/Modals/FormAddNotesModal";

interface IProps {
  updateCategory: (data: IEditCategoryData) => void;
  updateCategoryUtils: INoteResponseStatuses;
}

const EditCategoryBlock: FC<IProps> = ({
  updateCategory,
  updateCategoryUtils,
}): ReactElement => {
  const { showPopup, hideModal } = useActions();
  const { isShow, data } = useAppSelector((state) => state.modal.category.edit);
  const { isSuccess, isLoading, isError } = updateCategoryUtils;
  const popupMessages = PopupNoticeMessages.category.edit;

  const handleEditCategory = (values: AddCategoryDataType): void => {
    if (data) {
      const { title } = values;
      updateCategory({ _id: data._id, title });
    }
  };

  const hideModalEditCategory = () =>
    hideModal({ type: "category", act: "edit" });

  useEffect(() => {
    if (isSuccess) {
      showPopup(popupMessages.success);
      hideModalEditCategory();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      showPopup(popupMessages.error);
      hideModalEditCategory();
    }
  }, [isError]);

  return (
    <>
      {data && (
        <FormAddNotesModal
          isShowModal={isShow}
          handleCloseModal={hideModalEditCategory}
          formValues={{ ...data }}
          modalTitle="Редактирование категории"
          buttonText="Сохранить"
          submitCallback={handleEditCategory}
          isLoading={isLoading}
          isNote={false}
        />
      )}
    </>
  );
};

export default EditCategoryBlock;
