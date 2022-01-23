import React, { FC, ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserAuthInfo } from "types/usersTypes";
import { AppRoutes } from "constants/AppRoutes";

import NotesMainView from "views/NotesMainView";
import RegistrationContainer from "containers/RegistrationContainer";
import LoginContainer from "containers/LoginContainer";

interface IProps {
  data?: UserAuthInfo;
  refetchAuth: () => void;
}

const AppRouter: FC<IProps> = ({ data, refetchAuth }): ReactElement => {
  return (
    <Routes>
      {data ? (
        <>
          <Route path={AppRoutes.NOTES} element={<NotesMainView />} />
          <Route
            path={`${AppRoutes.NOTES}/:category`}
            element={<NotesMainView />}
          />
          <Route path="*" element={<Navigate to={AppRoutes.NOTES} />} />
        </>
      ) : (
        <>
          <Route
            path={AppRoutes.REGISTRATION}
            element={<RegistrationContainer refetchAuth={refetchAuth} />}
          />
          <Route
            path={AppRoutes.LOGIN}
            element={<LoginContainer refetchAuth={refetchAuth} />}
          />
          <Route path="*" element={<Navigate to={AppRoutes.LOGIN} />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
