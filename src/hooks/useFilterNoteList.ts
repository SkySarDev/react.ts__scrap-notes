import { INoteItem } from "types/notesTypes";

export const filterNotesByCategory = (
  array: INoteItem[],
  currentCategory: string
): INoteItem[] => {
  return array.filter(({ categoryId }) => categoryId === currentCategory);
};

export const lastNotesSortByDate = (array: INoteItem[]): INoteItem[] => {
  return [...array].sort((a, b) => b.dateCreate - a.dateCreate).slice(0, 10);
};

export const useFilterNoteList = () => {
  return (data: INoteItem[], category?: string) => {
    if (category) {
      return filterNotesByCategory(data, category);
    }

    return lastNotesSortByDate(data);
  };
};
