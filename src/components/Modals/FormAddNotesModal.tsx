import React, { FC, ReactElement, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { IFormAddNotesValues } from "types/notesTypes";

import ModalWrapper from "components/Modals/ModalWrapper";

interface IProps {
  isShowModal: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
  buttonText: string;
  formValues: IFormAddNotesValues;
  submitCallback: (data: IFormAddNotesValues) => void;
  isLoading: boolean;
}

const FormAddNotesModal: FC<IProps> = ({
  isShowModal,
  handleCloseModal,
  modalTitle,
  formValues,
  buttonText,
  submitCallback,
  isLoading,
}): ReactElement => {
  const initValues: IFormAddNotesValues = { title: "", body: null };
  const [formValuesState, setFormValuesState] =
    useState<IFormAddNotesValues>(initValues);

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
    setFormValuesState(initValues);
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

        {formValuesState.body !== null && (
          <TextField
            autoComplete="off"
            multiline
            required
            rows={3}
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
