import React, { FC } from "react";

interface IProps {
  message?: string;
}

const Error: FC<IProps> = ({ message }) => {
  return (
    <h1 style={{ color: "red" }}>{message || "Something went wrong..."}</h1>
  );
};

export default Error;
