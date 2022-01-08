export interface INoteCategory {
  _id: string;
  name: string;
}

export interface INoteItem {
  id: number;
  categoryId: number;
  categoryName: string;
  title: string;
  body: string;
}
