export interface INoteCategory {
  _id: string;
  name: string;
}

export interface INoteItem {
  _id: string;
  categoryId: string;
  title: string;
  body: string;
}
