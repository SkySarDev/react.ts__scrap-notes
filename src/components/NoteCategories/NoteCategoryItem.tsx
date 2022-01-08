import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { INoteCategory } from "types/notesTypes";

interface IProps {
  categoryItem: INoteCategory;
  deleteCategory: (_id: string) => void;
  updateCategory: (categoryInfo: INoteCategory) => void;
}

const NoteCategoryItem: FC<IProps> = ({
  categoryItem,
  deleteCategory,
  updateCategory,
}) => {
  const { _id, name } = categoryItem;
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const onChangeCategoryNameHandler = () => {
    setIsEdit(false);

    updateCategory({ _id, name: inputValue });
  };

  const deleteItem = () => deleteCategory(_id);

  const onEditCategoryHandler = () => setIsEdit(true);

  return (
    <li style={{ display: "flex", columnGap: 5, marginBottom: 5 }}>
      {isEdit ? (
        <input type="text" value={inputValue} onChange={onChangeValueHandler} />
      ) : (
        <Link to={`?category=${_id}`} style={{ flex: "1 0 auto" }}>
          {name}
        </Link>
      )}

      {isEdit ? (
        <button onClick={onChangeCategoryNameHandler}>Save</button>
      ) : (
        <button onClick={onEditCategoryHandler}>Edit</button>
      )}
      <button onClick={deleteItem}>X</button>
    </li>
  );
};

export default NoteCategoryItem;
