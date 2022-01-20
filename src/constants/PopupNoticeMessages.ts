import { IPopupNoticeMessages } from "types/appTypes";

export const PopupNoticeMessages: IPopupNoticeMessages = {
  category: {
    add: {
      success: { message: "Категория добавлена!", type: "success" },
      error: {
        message: "Ошибка добавления категории!",
        type: "error",
      },
    },
    edit: {
      success: { message: "Категория обновлена!", type: "success" },
      error: {
        message: "Ошибка обновления категории!",
        type: "error",
      },
    },
    delete: {
      success: { message: "Категория удалена!", type: "success" },
      error: {
        message: "Ошибка удаления категории!",
        type: "error",
      },
    },
  },
  note: {
    add: {
      success: { message: "Заметка добавлена!", type: "success" },
      error: {
        message: "Ошибка добавления заметки!",
        type: "error",
      },
    },
    edit: {
      success: { message: "Заметка обновлена!", type: "success" },
      error: {
        message: "Ошибка обновления заметки!",
        type: "error",
      },
    },
    delete: {
      success: { message: "Заметка удалена!", type: "success" },
      error: {
        message: "Ошибка удаления заметки!",
        type: "error",
      },
    },
  },
};
