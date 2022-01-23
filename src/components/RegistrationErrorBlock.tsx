import React, { FC, ReactElement } from "react";
import { Alert } from "@mui/material";

import { ICustomQueryErrorData } from "types/apiTypes";

interface IProps {
  errors: ICustomQueryErrorData;
}

const RegistrationErrorBlock: FC<IProps> = ({ errors }): ReactElement => {
  const errorsArr = errors.errorsArray?.length && errors.errorsArray;

  return (
    <>
      {errorsArr ? (
        errorsArr.map((errItem) => (
          <Alert key={errItem.msg} severity={"error"} sx={{ mb: 2 }}>
            {errItem.msg}
          </Alert>
        ))
      ) : (
        <Alert severity={"error"} sx={{ mb: 2 }}>
          {errors.message}
        </Alert>
      )}
    </>
  );
};

export default RegistrationErrorBlock;
