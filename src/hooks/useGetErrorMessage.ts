import { SerializedError } from "@reduxjs/toolkit";
import { ICustomQueryErrors } from "types/apiTypes";

export const useGetErrorMessage = () => {
  return (
    error: ICustomQueryErrors | SerializedError,
    message: string
  ): string => {
    const errorMessage = message || "Неизвестная ошибка";

    return "data" in error ? error.data.message : errorMessage;
  };
};
