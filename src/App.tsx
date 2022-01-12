import React, { FC, ReactElement } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AppRoutes } from "constants/AppRoutes";
import { useAuthQuery } from "services/api/usersApi";

import HeaderContainer from "containers/HeaderContainer";
import RegistrationContainer from "containers/RegistrationContainer";
import LoginContainer from "containers/LoginContainer";
import Loading from "views/Loading";
import Layout from "components/Layout";
import NotesView from "views/NotesView";

import "./App.css";

const App: FC = (): ReactElement => {
  const { data, isLoading, refetch } = useAuthQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderContainer user={data?.login} />
      <Layout>
        <Routes>
          {data ? (
            <>
              <Route path={AppRoutes.NOTES} element={<NotesView />} />
              <Route
                path={`${AppRoutes.NOTES}/:category`}
                element={<NotesView />}
              />
              <Route path="*" element={<Navigate to={AppRoutes.NOTES} />} />
            </>
          ) : (
            <>
              <Route
                path={AppRoutes.REGISTRATION}
                element={<RegistrationContainer refetchAuth={refetch} />}
              />
              <Route
                path={AppRoutes.LOGIN}
                element={<LoginContainer refetchAuth={refetch} />}
              />
              <Route path="*" element={<Navigate to={AppRoutes.LOGIN} />} />
            </>
          )}
        </Routes>
      </Layout>
    </>
  );
};

export default App;
