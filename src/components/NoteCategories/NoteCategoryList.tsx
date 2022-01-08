import React, { FC, useState } from "react";

import { INoteCategory } from "types/notesTypes";

import NoteCategoryItemContainer from "containers/Notes/NoteCategoryItemContainer";

interface IProps {
  categoryList?: INoteCategory[];
  addCategory: (value: Omit<INoteCategory, "_id">) => void;
}

const NoteCategoryList: FC<IProps> = ({ categoryList, addCategory }) => {
  const [newCategoryValue, setNewCategoryValue] = useState("");

  const onChangeNewCategoryValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewCategoryValue(e.target.value);
  };

  const onClickAddCategory = () => {
    addCategory({ name: newCategoryValue.trim() });
    setNewCategoryValue("");
  };

  return (
    <>
      {categoryList?.length ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {categoryList.map((categoryItem) => (
            <NoteCategoryItemContainer
              key={categoryItem._id}
              categoryItem={categoryItem}
            />
          ))}
        </ul>
      ) : (
        <div>Нет категорий</div>
      )}

      <input
        type="text"
        value={newCategoryValue}
        onChange={onChangeNewCategoryValue}
      />
      <button onClick={onClickAddCategory}>Добавить категорию</button>
    </>
  );
};

export default NoteCategoryList;
