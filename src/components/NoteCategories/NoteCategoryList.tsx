import React, { FC, ReactElement } from "react";
import { List } from "@mui/material";

import { INoteCategory } from "types/notesTypes";

import NoteCategoryItemContainer from "containers/Notes/NoteCategoryItemContainer";

interface IProps {
  categoryList: INoteCategory[];
}

const NoteCategoryList: FC<IProps> = ({ categoryList }): ReactElement => {
  return (
    <List sx={{ p: 0 }}>
      {categoryList.map((categoryItem) => (
        <NoteCategoryItemContainer
          key={categoryItem._id}
          categoryItem={categoryItem}
        />
      ))}
    </List>
  );
};

export default NoteCategoryList;
