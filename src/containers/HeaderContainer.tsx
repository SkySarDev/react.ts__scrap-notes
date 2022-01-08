import React, { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLazyLogoutQuery } from "services/usersApi";

import Header from "components/Header";

interface IHeaderContainerProps {
  user?: string;
}

const HeaderContainer: FC<IHeaderContainerProps> = ({ user }): ReactElement => {
  const navigate = useNavigate();
  const [triggerLogout, statusLogout] = useLazyLogoutQuery();

  const logout = (): void => {
    localStorage.removeItem("token");
    triggerLogout();
  };

  useEffect(() => {
    if (statusLogout.isSuccess) {
      navigate(0);
    }
  }, [statusLogout]);

  return <Header logout={logout} user={user} />;
};

export default HeaderContainer;
