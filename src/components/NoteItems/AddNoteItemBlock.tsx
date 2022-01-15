import React, { FC, ReactElement, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { IAddNoteUtils, IFormAddNotesValues } from "types/notesTypes";

import FormAddNotesModal from "components/Modals/FormAddNotesModal";

interface IProps {
  addNewNote: (data: IFormAddNotesValues) => void;
  addNoteUtils: IAddNoteUtils;
}

const AddNoteItemBlock: FC<IProps> = ({
  addNewNote,
  addNoteUtils,
}): ReactElement => {
  const { data, error, isLoading } = addNoteUtils;
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = (): void => setModalOpen(true);
  const handleModalClose = (): void => setModalOpen(false);
  const handleAddNote = (data: IFormAddNotesValues): void => {
    addNewNote(data);
  };

  useEffect(() => {
    if (error || data?._id) {
      handleModalClose();
    }
  }, [data, error]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1.5 }}>
        <Button startIcon={<AddIcon />} onClick={handleModalOpen}>
          Добавить заметку
        </Button>
      </Box>

      <FormAddNotesModal
        isShowModal={isModalOpen}
        handleCloseModal={handleModalClose}
        formValues={{ title: "", body: "" }}
        modalTitle="Добавление заметки"
        buttonText="Добавить"
        submitCallback={handleAddNote}
        isLoading={isLoading}
      />
    </>
  );
};

export default AddNoteItemBlock;
