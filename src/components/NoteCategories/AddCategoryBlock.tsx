import React, { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useActions } from "hooks/store/useActions";
import { useAppSelector } from "hooks/store/reduxHooks";
import { PopupNoticeMessages } from "constants/PopupNoticeMessages";
import { AppRoutes } from "constants/AppRoutes";
import { IAddCategoryUtils } from "types/notesTypes";
import { IAddCategoryData } from "types/modalsTypes";

import FormAddNotesModal from "components/Modals/FormAddNotesModal";

interface IProps {
  addNewCategory: (data: IAddCategoryData) => void;
  addCategoryUtils: IAddCategoryUtils;
}

const AddCategoryBlock: FC<IProps> = ({
  addNewCategory,
  addCategoryUtils,
}): ReactElement => {
  const navigate = useNavigate();
  const { isShow } = useAppSelector((state) => state.modal.category.add);
  const { showPopup, hideModal } = useActions();
  const { data, isSuccess, isLoading, isError } = addCategoryUtils;
  const popupMessages = PopupNoticeMessages.category.add;

  const handleAddCategory = (data: IAddCategoryData): void =>
    addNewCategory(data);

  const handleCloseModal = () => hideModal({ type: "category", act: "add" });

  useEffect(() => {
    if (isSuccess) {
      showPopup(popupMessages.success);
      handleCloseModal();
      data && navigate(`${AppRoutes.NOTES}/${data._id}`);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      showPopup(popupMessages.error);
      handleCloseModal();
    }
  }, [isError]);

  return (
    <FormAddNotesModal
      isShowModal={isShow}
      handleCloseModal={handleCloseModal}
      formValues={{ title: "" }}
      submitCallback={handleAddCategory}
      modalTitle={"Добавление категории"}
      buttonText={"Добавить"}
      isLoading={isLoading}
      isNote={false}
    />
  );
};

export default AddCategoryBlock;
