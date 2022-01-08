import React, { FC, ReactElement, useState } from "react";
import Input from "components/Input";
import { INoteItem } from "types/notesTypes";

interface IAddNewNoteFormProps {
  category: string;
  addNote: (data: Omit<INoteItem, "_id">) => void;
}

const AddNewNoteForm: FC<IAddNewNoteFormProps> = ({
  category,
  addNote,
}): ReactElement => {
  const initStateForm = {
    title: "",
    body: "",
  };
  const [formData, setFormData] = useState(initStateForm);

  const onChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addNote({
      categoryId: category,
      title: formData.title.trim(),
      body: formData.body.trim(),
    });
    setFormData(initStateForm);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <Input
          placeholder={"Название заметки"}
          name={"title"}
          value={formData.title}
          onChangeHandler={onChangeInputValue}
        />
      </div>

      <div>
        <textarea
          name="body"
          cols={25}
          rows={5}
          value={formData.body}
          onChange={onChangeInputValue}
        />
      </div>
      <button>Создать</button>
    </form>
  );
};

export default AddNewNoteForm;
