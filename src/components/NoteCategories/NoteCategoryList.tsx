import React, { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Alert, List } from "@mui/material";

import { INoteCategory } from "types/notesTypes";

import NoteCategoryItem from "components/NoteCategories/NoteCategoryItem";

interface IProps {
  categoryList: INoteCategory[];
}

const NoteCategoryList: FC<IProps> = ({ categoryList }): ReactElement => {
  const { category } = useParams();

  return (
    <>
      {categoryList.length ? (
        <List sx={{ p: 0 }}>
          {categoryList.map((categoryItem) => (
            <NoteCategoryItem
              key={categoryItem._id}
              categoryItem={categoryItem}
              currenCategory={category}
            />
          ))}
        </List>
      ) : (
        <Alert severity="warning">Вы ещё не создали ни одной категории</Alert>
      )}
    </>
  );
};

export default NoteCategoryList;
