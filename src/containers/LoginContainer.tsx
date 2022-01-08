import React, { FC, useEffect } from "react";

import { useLoginMutation } from "services/api/usersApi";
import { UserLoginInfo } from "types/usersTypes";

import Login from "views/Login";
import { saveToken } from "utils/tokensManager";

interface ILoginContainerProps {
  refetchAuth: () => void;
}

const LoginContainer: FC<ILoginContainerProps> = ({ refetchAuth }) => {
  const [login, { data, error, isLoading }] = useLoginMutation();

  const submitLoginForm = (userInfo: UserLoginInfo) => {
    login(userInfo);
  };

  useEffect(() => {
    if (data?.token) {
      saveToken(data);
      refetchAuth();
    }
  }, [data]);

  return (
    <Login
      error={error && "data" in error ? error.data.message : null}
      loading={isLoading}
      submitLoginForm={submitLoginForm}
    />
  );
};

export default LoginContainer;
