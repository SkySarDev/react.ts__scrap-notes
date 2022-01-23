import React, { FC, ReactElement, useEffect } from "react";

import { useRegistrationMutation } from "services/api/usersApi";
import { IUserInfo } from "types/usersTypes";
import { saveToken } from "utils/tokensManager";

import RegistrationView from "views/RegistrationView";

interface IProps {
  refetchAuth: () => void;
}

const RegistrationContainer: FC<IProps> = ({ refetchAuth }): ReactElement => {
  const [registration, { data, error, isLoading, isSuccess }] =
    useRegistrationMutation();
  const errors = error && "data" in error ? error.data : null;

  const submitRegistrationForm = (userInfo: IUserInfo): void => {
    registration(userInfo);
  };

  useEffect(() => {
    if (data?.token) {
      saveToken(data);
      refetchAuth();
    }
  }, [data]);

  return (
    <RegistrationView
      isLoading={isLoading}
      isSuccess={isSuccess}
      errors={errors}
      submitRegistrationForm={submitRegistrationForm}
    />
  );
};

export default RegistrationContainer;
