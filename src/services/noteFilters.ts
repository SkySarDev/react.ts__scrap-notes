import { INoteItem } from "types/notesTypes";

export const filterNotesByCategory = (
  array: INoteItem[],
  currentCategory: string
): INoteItem[] => {
  return array.filter(({ categoryId }) => categoryId === currentCategory);
};

export const lastNotesSortByDate = (array: INoteItem[]): INoteItem[] => {
  return [...array].sort((a, b) => b.dateCreate - a.dateCreate).slice(0, -6);
};
