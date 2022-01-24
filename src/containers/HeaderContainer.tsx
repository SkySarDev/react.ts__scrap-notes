import React, { FC, ReactElement, useEffect } from "react";

import { useLazyLogoutQuery, usersApi } from "services/api/usersApi";
import { noteCategoriesApi } from "services/api/noteCategoriesApi";
import { noteItemsApi } from "services/api/noteItemsApi";
import { useAppDispatch } from "hooks/store/reduxHooks";
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
  const [triggerLogout, statusLogout] = useLazyLogoutQuery();
  const dispatch = useAppDispatch();

  const logout = (): void => {
    removeToken();
    triggerLogout();
  };

  useEffect(() => {
    if (statusLogout.isSuccess) {
      dispatch(usersApi.util.resetApiState());
      dispatch(noteCategoriesApi.util.resetApiState());
      dispatch(noteItemsApi.util.resetApiState());
    }
  }, [statusLogout]);

  return <Header logout={logout} isLoading={isLoading} user={user} />;
};

export default HeaderContainer;
