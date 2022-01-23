import React, { FC, ReactElement } from "react";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { IUserInfo } from "types/usersTypes";

interface IProps {
  formData: IUserInfo;
  onSubmitHandler: (e: React.SyntheticEvent) => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
  isLoading: boolean;
  isLogin: boolean;
}

const UsersForm: FC<IProps> = ({
  formData,
  onSubmitHandler,
  onChangeHandler,
  buttonText,
  isLoading,
  isLogin,
}): ReactElement => {
  const { email, login, password } = formData;

  return (
    <form onSubmit={onSubmitHandler}>
      <Box sx={{ mb: 2 }}>
        <TextField
          type={"email"}
          label={"Email"}
          name={"email"}
          required
          disabled={isLoading}
          value={email}
          onChange={onChangeHandler}
        />
      </Box>

      {isLogin && (
        <Box sx={{ mb: 2 }}>
          <TextField
            type={"text"}
            label={"Логин"}
            name={"login"}
            required
            disabled={isLoading}
            value={login}
            onChange={onChangeHandler}
          />
        </Box>
      )}

      <Box sx={{ mb: 2 }}>
        <TextField
          type={"password"}
          label={"Пароль"}
          name={"password"}
          required
          disabled={isLoading}
          value={password}
          onChange={onChangeHandler}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <LoadingButton
          loading={isLoading}
          variant={"contained"}
          type={"submit"}
        >
          {buttonText}
        </LoadingButton>
      </Box>
    </form>
  );
};

export default UsersForm;
