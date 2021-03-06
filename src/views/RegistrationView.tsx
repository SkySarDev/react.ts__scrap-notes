import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";

import { AppRoutes } from "constants/AppRoutes";
import { IUserInfo } from "types/usersTypes";
import { ICustomQueryErrorData } from "types/apiTypes";

import UsersForm from "components/UsersForm";
import RegistrationErrorBlock from "components/RegistrationErrorBlock";

interface IRegistrationViewProps {
  errors: ICustomQueryErrorData | null;
  isLoading: boolean;
  isSuccess: boolean;
  submitRegistrationForm: (data: IUserInfo) => void;
}

const RegistrationView: FC<IRegistrationViewProps> = ({
  errors,
  isLoading,
  isSuccess,
  submitRegistrationForm,
}): ReactElement => {
  const initState: IUserInfo = {
    email: "",
    login: "",
    password: "",
  };
  const [formData, setFormData] = useState(initState);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitRegistrationForm(formData);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {errors && <RegistrationErrorBlock errors={errors} />}

        <UsersForm
          formData={formData}
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
          buttonText={"Регистрация"}
          isLoading={isLoading}
          isLogin
        />

        <Typography>
          Уже есть аккаунт?{" "}
          <Link component={LinkRouter} to={AppRoutes.LOGIN}>
            Войти
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegistrationView;
