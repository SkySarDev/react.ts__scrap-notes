import React from "react";

import NoteCategoryListContainer from "containers/Notes/NoteCategoryListContainer";

const NotesView = () => {
  return (
    <div style={{ display: "flex", columnGap: 20 }}>
      <div style={{ flex: "0 0 300px" }}>
        <h4>Категории</h4>
        <NoteCategoryListContainer />
      </div>

      <div style={{ flex: "1 1 auto" }}>
        <h4>Заметки</h4>
        {/*{currentCategoryId ? (*/}
        {/*  <NoteListContainer currentCategoryId={currentCategoryId} />*/}
        {/*) : (*/}
        {/*  <div>Выберите категорию</div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default NotesView;
