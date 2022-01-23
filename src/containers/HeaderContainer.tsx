import React, { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLazyLogoutQuery } from "services/api/usersApi";
import { removeToken } from "utils/tokensManager";

import Header from "components/Header";

interface IHeaderContainerProps {
  user?: string;
  isLoading: boolean;
}

const HeaderContainer: FC<IHeaderContainerProps> = ({
  user,
  isLoading,
}): ReactElement => {
  const navigate = useNavigate();
  const [triggerLogout, statusLogout] = useLazyLogoutQuery();

  const logout = (): void => {
    removeToken();
    triggerLogout();
  };

  useEffect(() => {
    if (statusLogout.isSuccess) {
      navigate(0);
    }
  }, [statusLogout]);

  return <Header logout={logout} isLoading={isLoading} user={user} />;
};

export default HeaderContainer;
