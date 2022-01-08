import React, { FC } from "react";

interface IProps {
  type?: string;
  placeholder: string;
  name: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({
  type,
  placeholder,
  name,
  value,
  onChangeHandler,
}) => {
  return (
    <input
      style={{ fontSize: 20 }}
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
