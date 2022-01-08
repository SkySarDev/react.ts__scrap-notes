import React, { FC } from "react";
import { Link } from "react-router-dom";

import { INoteItem } from "types/notesTypes";
import { ApiUrls } from "constants/ApiUrls";

interface IProps {
  noteList: INoteItem[];
}

const NoteList: FC<IProps> = ({ noteList }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {noteList.map((note) => {
        const { id, title } = note;

        return (
          <li key={id}>
            <Link to={`${ApiUrls.NOTES}/${id}`} key={id}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;
