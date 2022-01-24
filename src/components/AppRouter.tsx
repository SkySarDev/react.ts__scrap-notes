import React, { FC, ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppRoutes } from "constants/AppRoutes";

import NotesMainView from "views/NotesMainView";
import RegistrationContainer from "containers/RegistrationContainer";
import LoginContainer from "containers/LoginContainer";

interface IProps {
  user?: string;
  refetchAuth: () => void;
}

const AppRouter: FC<IProps> = ({ user, refetchAuth }): ReactElement => {
  return (
    <Routes>
      {user ? (
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
