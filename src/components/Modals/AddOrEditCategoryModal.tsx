import React, { FC, ReactElement, useEffect, useState } from "react";

import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import ModalWrapper from "components/Modals/ModalWrapper";

interface IProps {
  isShowModal: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
  buttonText: string;
  categoryName: string;
  onClickCallback: (value: string) => void;
  isLoading: boolean;
}

const AddOrEditCategoryModal: FC<IProps> = ({
  isShowModal,
  handleCloseModal,
  modalTitle,
  categoryName,
  buttonText,
  onClickCallback,
  isLoading,
}): ReactElement => {
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => setCategoryValue(categoryName), [categoryName]);

  const onChangeCategoryValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;

    if (value) {
      setError(false);
    } else {
      setError(true);
    }

    setCategoryValue(value);
  };

  const handleButtonClick = () => {
    const value = categoryValue.trim();

    if (!value) {
      setError(true);
    } else {
      onClickCallback(value);
    }

    setCategoryValue("");
  };

  return (
    <ModalWrapper
      isShowModal={isShowModal}
      handleCloseModal={handleCloseModal}
      modalTitle={modalTitle}
    >
      <TextField
        autoComplete="off"
        value={categoryValue}
        onChange={onChangeCategoryValue}
        error={error}
        helperText={error && "Поле не может быть пустым"}
        sx={{ width: "100%", mt: 3 }}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LoadingButton
          variant="contained"
          sx={{ mt: 3, textAlign: "center" }}
          loading={isLoading}
          onClick={handleButtonClick}
          disabled={error}
        >
          {buttonText}
        </LoadingButton>
      </Box>
    </ModalWrapper>
  );
};

export default AddOrEditCategoryModal;
