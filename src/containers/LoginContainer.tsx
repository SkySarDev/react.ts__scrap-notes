import React, { FC, useEffect } from "react";

import { useLoginMutation } from "services/api/usersApi";
import { saveToken } from "utils/tokensManager";
import { UserLoginInfo } from "types/usersTypes";

import LoginView from "views/LoginView";

interface IProps {
  refetchAuth: () => void;
}

const LoginContainer: FC<IProps> = ({ refetchAuth }) => {
  const [login, { data, error, isLoading, isSuccess }] = useLoginMutation();

  const submitLoginForm = (userInfo: UserLoginInfo): void => {
    login(userInfo);
  };

  useEffect(() => {
    if (data?.token) {
      saveToken(data);
      refetchAuth();
    }
  }, [data]);

  return (
    <LoginView
      error={error && "data" in error ? error.data.message : null}
      isLoading={isLoading}
      isSuccess={isSuccess}
      submitLoginForm={submitLoginForm}
    />
  );
};

export default LoginContainer;
