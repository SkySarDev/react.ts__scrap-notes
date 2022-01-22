import React, { FC, ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import { useActions } from "hooks/store/useActions";
import { INoteItem } from "types/notesTypes";

import ListItemOptions from "components/ListItemOptions";

// ToDo refactor
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

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

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      changeExpandedNote(isExpanded ? panel : false);
    };

  const handleDeleteItem = () => showNoteDialog(_id);
  const handleShowModalEdit = () => showModalEditNote({ _id, title, body });

  return (
    <Accordion expanded={expandedNote === _id} onChange={handleChange(_id)}>
      <AccordionSummary>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ display: "flex", alignItems: "start" }}>
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
