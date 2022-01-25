import React, { FC, ReactElement } from "react";

import { useLazyLogoutQuery } from "services/api/usersApi";

import Header from "components/Header";
import { useLogout } from "hooks/useLogout";

interface IHeaderContainerProps {
  user?: string;
  isLoading: boolean;
}

const HeaderContainer: FC<IHeaderContainerProps> = ({
  user,
  isLoading,
}): ReactElement => {
  const [logoutFromDB] = useLazyLogoutQuery();
  const appLogout = useLogout();

  const handleLogout = (): void => {
    logoutFromDB();
    appLogout();
  };

  return <Header logout={handleLogout} isLoading={isLoading} user={user} />;
};

export default HeaderContainer;
