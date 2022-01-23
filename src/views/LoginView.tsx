import React, { FC, useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Alert, Box, Typography, Link } from "@mui/material";

import { AppRoutes } from "constants/AppRoutes";
import { IUserInfo } from "types/usersTypes";

import UsersForm from "components/UsersForm";

interface IProps {
  error: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  submitLoginForm: (userInfo: IUserInfo) => void;
}

const LoginView: FC<IProps> = ({
  error,
  isLoading,
  isSuccess,
  submitLoginForm,
}) => {
  const initState: IUserInfo = {
    email: "",
    login: "",
    password: "",
  };
  const [formData, setFormData] = useState(initState);

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    submitLoginForm(formData);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData(initState);
    }
  }, [isSuccess]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <Box sx={{ mt: 4 }}>
        {error && (
          <Alert severity={"error"} sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <UsersForm
          formData={formData}
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
          buttonText={"Войти"}
          isLoading={isLoading}
          isLogin={false}
        />

        <Typography>
          Нет аккаунта?{" "}
          <Link component={LinkRouter} to={AppRoutes.REGISTRATION}>
            Регистрация
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginView;
