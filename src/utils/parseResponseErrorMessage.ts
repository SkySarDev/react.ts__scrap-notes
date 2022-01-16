import { ICustomQueryErrors } from "types/apiTypes";
import { SerializedError } from "@reduxjs/toolkit";

export const parseResponseErrorMessage = (
  error: ICustomQueryErrors | SerializedError | undefined,
  defaultMessage: string
): string => {
  if (error && "data" in error) {
    return error.data.message;
  }

  return defaultMessage;
};
