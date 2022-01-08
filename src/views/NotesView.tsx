import React, { FC, ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NoteCategoryListContainer from "containers/Notes/NoteCategoryListContainer";
import NoteListContainer from "containers/Notes/NoteListContainer";

const NotesView: FC = (): ReactElement => {
  const { search } = useLocation();
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(search);

    setCurrentCategory(searchParams.get("category"));
  }, [search]);

  return (
    <div style={{ display: "flex", columnGap: 20 }}>
      <div style={{ flex: "0 0 300px" }}>
        <h4>Категории</h4>
        <NoteCategoryListContainer />
      </div>

      <div style={{ flex: "1 1 auto" }}>
        <h4>Заметки</h4>
        {currentCategory ? (
          <NoteListContainer category={currentCategory} />
        ) : (
          <div>Выберите категорию</div>
        )}
      </div>
    </div>
  );
};

export default NotesView;
