import React, { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePopupNoticeContext } from "hooks/usePopupNoticeContext";
import { PopupNoticeMessages as popupMessages } from "constants/PopupNoticeMessages";
import { AppRoutes } from "constants/AppRoutes";
import { IAddCategoryUtils, IFormAddNotesValues } from "types/notesTypes";

import FormAddNotesModal from "components/Modals/FormAddNotesModal";

interface IProps {
  isShowModal: boolean;
  handleCloseModal: () => void;
  addNewCategory: (data: IFormAddNotesValues) => void;
  addCategoryUtils: IAddCategoryUtils;
}

const AddNoteCategoryBlock: FC<IProps> = ({
  isShowModal,
  handleCloseModal,
  addNewCategory,
  addCategoryUtils,
}): ReactElement => {
  const navigate = useNavigate();
  const { showPopupNotice } = usePopupNoticeContext();
  const { data, isSuccess, isLoading, isError } = addCategoryUtils;

  const handleAddCategory = (data: IFormAddNotesValues): void => {
    addNewCategory(data);
  };

  useEffect(() => {
    if (isSuccess) {
      showPopupNotice(popupMessages.category.add.success);
      handleCloseModal();
      data && navigate(`${AppRoutes.NOTES}/${data._id}`);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      showPopupNotice(popupMessages.category.add.error);
      handleCloseModal();
    }
  }, [isError]);

  return (
    <FormAddNotesModal
      isShowModal={isShowModal}
      handleCloseModal={handleCloseModal}
      formValues={{ title: "", body: null }}
      submitCallback={handleAddCategory}
      modalTitle={"Добавление категории"}
      buttonText={"Добавить"}
      isLoading={isLoading}
    />
  );
};

export default AddNoteCategoryBlock;
