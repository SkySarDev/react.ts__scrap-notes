export interface IAddCategoryData {
  title: string;
}

export interface IEditCategoryData extends IAddCategoryData {
  _id: string;
}

export interface IAddNoteData extends IAddCategoryData {
  body: string;
}

export interface IEditNoteData extends IAddNoteData {
  _id: string;
}

export interface IModalHide {
  type: "category" | "note";
  act: "add" | "edit";
}

export interface IModalNotesState {
  category: {
    add: {
      isShow: boolean;
      data: null;
    };
    edit: {
      isShow: boolean;
      data: IEditCategoryData | null;
    };
  };
  note: {
    add: {
      isShow: boolean;
      data: null;
    };
    edit: {
      isShow: boolean;
      data: IEditNoteData | null;
    };
  };
}
