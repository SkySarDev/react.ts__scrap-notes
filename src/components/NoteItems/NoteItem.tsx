import React, { FC, ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import { useActions } from "hooks/store/useActions";
import { INoteItem } from "types/notesTypes";

import ListItemOptions from "components/ListItemOptions";

const Accordion = styled(MuiAccordion)({
  border: `1px solid rgba(0, 0, 0, .125)`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "& .Mui-expanded": {
    backgroundColor: "rgb(227, 238, 250)",
    transition: "backgroundColor 0.5s",
  },
});

const AccordionSummary = styled(MuiAccordionSummary)({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    ml: 1,
  },
});

const AccordionDetails = styled(MuiAccordionDetails)({
  display: "flex",
  alignItems: "start",
  p: 2,
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "rgba(0, 0, 0, .025)",
});

interface IProps {
  noteItem: INoteItem;
  expandedNote: string | false;
  changeExpandedNote: (value: string | false) => void;
}

const NoteItem: FC<IProps> = ({
  noteItem,
  expandedNote,
  changeExpandedNote,
}): ReactElement => {
  const { _id, title, body } = noteItem;
  const { showNoteDialog, showModalEditNote } = useActions();
  const isActive = expandedNote === _id;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      changeExpandedNote(isExpanded ? panel : false);
    };

  const handleDeleteItem = () => showNoteDialog(_id);
  const handleShowModalEdit = () => showModalEditNote({ _id, title, body });

  return (
    <Accordion
      disableGutters
      elevation={0}
      expanded={isActive}
      onChange={handleChange(_id)}
    >
      <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      >
        <Typography sx={{ ml: 1 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ flexGrow: 1 }}>{body}</Typography>

        <ListItemOptions
          deleteItem={handleDeleteItem}
          editItem={handleShowModalEdit}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default NoteItem;
