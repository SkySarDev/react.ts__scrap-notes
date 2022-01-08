import React, { FC, ReactElement, useEffect } from "react";

import { useRegistrationMutation } from "services/usersApi";
import { IUserInfo } from "types/usersTypes";
import { saveToken } from "utils/tokensManager";

import RegistrationView from "views/RegistrationView";

interface IRegistrationContainerProps {
  refetchAuth: () => void;
}

const RegistrationContainer: FC<IRegistrationContainerProps> = ({
  refetchAuth,
}): ReactElement => {
  const [registration, { data, error, isLoading }] = useRegistrationMutation();

  const submitRegistrationForm = (userInfo: IUserInfo) => {
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
      loading={isLoading}
      error={error && "data" in error ? error.data.message : null}
      submitRegistrationForm={submitRegistrationForm}
    />
  );
};

export default RegistrationContainer;
