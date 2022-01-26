import React, { FC, ReactElement, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { IAddCategoryData, IAddNoteData } from "types/modalsTypes";

import ModalWrapper from "components/Modals/ModalWrapper";

interface IProps {
  isShowModal: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
  buttonText: string;
  formValues: IAddCategoryData | IAddNoteData;
  submitCallback: (data: IAddNoteData) => void;
  isLoading: boolean;
  isNote: boolean;
}

const FormAddNotesModal: FC<IProps> = ({
  isShowModal,
  handleCloseModal,
  modalTitle,
  formValues,
  buttonText,
  submitCallback,
  isLoading,
  isNote,
}): ReactElement => {
  const initValues = { title: "", body: "" };
  const [formValuesState, setFormValuesState] =
    useState<IAddNoteData>(initValues);

  useEffect(() => {
    setFormValuesState({
      ...formValuesState,
      ...formValues,
    });
  }, [formValues]);

  const onChangeCategoryValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;

    setFormValuesState({
      ...formValuesState,
      [name]: value,
    });
  };

  const handleSubmitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    submitCallback(formValuesState);
  };

  return (
    <ModalWrapper
      isShowModal={isShowModal}
      handleCloseModal={handleCloseModal}
      modalTitle={modalTitle}
    >
      <form onSubmit={handleSubmitForm}>
        <TextField
          autoComplete="off"
          autoFocus
          required
          name="title"
          label="Название"
          value={formValuesState.title}
          onChange={onChangeCategoryValue}
          sx={{ width: "100%", mt: 3 }}
        />

        {isNote && (
          <TextField
            autoComplete="off"
            multiline
            required
            minRows={3}
            maxRows={7}
            name="body"
            label="Текст заметки"
            value={formValuesState.body}
            onChange={onChangeCategoryValue}
            sx={{ width: "100%", mt: 3 }}
          />
        )}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <LoadingButton
            type="submit"
            variant="contained"
            sx={{ mt: 3, textAlign: "center" }}
            loading={isLoading}
          >
            {buttonText}
          </LoadingButton>
        </Box>
      </form>
    </ModalWrapper>
  );
};

export default FormAddNotesModal;
